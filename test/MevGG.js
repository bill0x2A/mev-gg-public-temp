const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MevGG contract", function () {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let MevGG;
  let hardhatMevGG;
  let owner;
  let addr1;
  let addr2;
  let addrs;
  const initialKeyPrice1 = 3366666666666000;
  const initialKeyPrice = 500000000000000;
  const startTime1 = 86400;
  const increment1 = 30;

  // console.log(ethers.utils.formatEther(initialKeyPrice));
  console.log(ethers.utils.formatEther(ethers.BigNumber.from('50000000000000000')));
  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    MevGG = await ethers.getContractFactory("MevGG");
    Renderer = await ethers.getContractFactory("Renderer");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    hardhatMevGG = await MevGG.deploy(startTime1, increment1, initialKeyPrice);
    hardhatRenderer = await Renderer.deploy();
    await hardhatRenderer.deployed();
    // We can interact with the contract by calling `hardhatToken.method()`
    await hardhatMevGG.deployed();
    console.log(hardhatRenderer.address);
    await hardhatMevGG.setRenderer(hardhatRenderer.address);
  });

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.

    // If the callback function is async, Mocha will `await` it.
    it("Should set the right owner", async function () {
      // Expect receives a value, and wraps it in an assertion objet. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be equal
      // to our Signer's owner.
      expect(await hardhatMevGG.developer()).to.equal(owner.address);
    });

    it("Total number of keys purchased should equal 0", async function () {
      expect(await hardhatMevGG.totalKeys()).to.equal(0);
    });
    it("Total time left should be 86400", async function () {
      expect(await hardhatMevGG.getTimeLeft()).to.equal(86400);
    });
  });

  describe("Playing the game", function () {
    it("Should purchase a key", async function () {
      keyPrice = await hardhatMevGG.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      buyTx = await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(1);
      newKeyPrice = await hardhatMevGG.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
    });
    it("Should purchase another key", async function () {
      keyPrice = await hardhatMevGG.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(1);
    });
    it("Should purchase 2 keys", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(2, { value: 2*keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(2);
      newKeyPrice = await hardhatMevGG.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
      await hardhatMevGG.connect(addr2).purchaseKeys(5, { value: keyPrice.mul(5) });
      expect(await hardhatMevGG.totalKeys()).to.equal(7);
      await hardhatMevGG.connect(addr2).purchaseKeys(10, { value: keyPrice.mul(10) });
      expect(await hardhatMevGG.totalKeys()).to.equal(17);
      await hardhatMevGG.connect(addr2).purchaseKeys(2, { value: 2*keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(2, { value: 2*keyPrice });
    });
    it("Should purchase 20 keys", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(20, { value: keyPrice.mul(20) });
      expect(await hardhatMevGG.totalKeys()).to.equal(20);
      newKeyPrice = await hardhatMevGG.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
      await hardhatMevGG.connect(addr2).purchaseKeys(5, { value: keyPrice.mul(5) });
      expect(await hardhatMevGG.totalKeys()).to.equal(25);
    });
    it("Should update winning", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(1);
      expect(await hardhatMevGG.getWinner()).to.equal(addr2.address);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(2);
      expect(await hardhatMevGG.getWinner()).to.equal(addr1.address);
    });
    it("Should not update clock before 5 purchases", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(86400);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(86400);
    });
    it("Should update clock after 5 purchases", async function () {
      console.log(await ethers.provider.getBlockNumber());
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime1);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime1);
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime1);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatMevGG.connect(addr2).incrementCounter();
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime1-1);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatMevGG.connect(addr2).incrementCounter();
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime1-2);
      let counter = 0;
      for (let i=0; i < 30; i++) {
        await hardhatMevGG.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime1-32);
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime1-3);
    });
    it("Should render SVG", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(1);
      expect(await hardhatMevGG.totalSupply()).to.equal(1);
      expect(await hardhatMevGG.getWinner()).to.equal(addr2.address);
      console.log(await hardhatMevGG.tokenURI(0));
    });
  });
});

describe("MevGG sped up", function () {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let MevGG;
  let hardhatMevGG;
  let owner;
  let addr1;
  let addr2;
  let addrs;
  const initialKeyPrice1 = 3366666666666000;
  const initialKeyPrice = ethers.BigNumber.from('50000000000000000');
  const startTime2 = 35;
  const increment2 = 5;

  // console.log(ethers.utils.formatEther(initialKeyPrice));
  console.log(ethers.utils.formatEther(ethers.BigNumber.from('50000000000000000')));
  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    MevGG = await ethers.getContractFactory("MevGG");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    hardhatMevGG = await MevGG.deploy(startTime2, increment2, initialKeyPrice);

    // We can interact with the contract by calling `hardhatToken.method()`
    await hardhatMevGG.deployed();
  });

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.

    // If the callback function is async, Mocha will `await` it.
    it("Should set the right owner", async function () {
      // Expect receives a value, and wraps it in an assertion objet. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be equal
      // to our Signer's owner.
      expect(await hardhatMevGG.developer()).to.equal(owner.address);
    });

    it("Total number of keys purchased should equal 0", async function () {
      expect(await hardhatMevGG.totalKeys()).to.equal(0);
    });
    it("Total time left should be equal to start time", async function () {
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2);
    });
  });

  describe("Playing the game", function () {
    it("Should purchase a key", async function () {
      keyPrice = await hardhatMevGG.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      buyTx = await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(1);
      newKeyPrice = await hardhatMevGG.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
    });
    it("Should purchase another key", async function () {
      keyPrice = await hardhatMevGG.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(1);
    });
    it("Should purchase 2 keys", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(2, { value: keyPrice.mul(2) });
      expect(await hardhatMevGG.totalKeys()).to.equal(2);
      newKeyPrice = await hardhatMevGG.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
      await hardhatMevGG.connect(addr2).purchaseKeys(5, { value: keyPrice.mul(5) });
      expect(await hardhatMevGG.totalKeys()).to.equal(7);
      await hardhatMevGG.connect(addr2).purchaseKeys(10, { value: keyPrice.mul(10) });
      expect(await hardhatMevGG.totalKeys()).to.equal(17);
      await hardhatMevGG.connect(addr2).purchaseKeys(2, { value: keyPrice.mul(2) });
      await hardhatMevGG.connect(addr2).purchaseKeys(2, { value: keyPrice.mul(2) });
    });
    it("Should update winning", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(1);
      expect(await hardhatMevGG.getWinner()).to.equal(addr2.address);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.totalKeys()).to.equal(2);
      expect(await hardhatMevGG.getWinner()).to.equal(addr1.address);
    });
    it("Should not update clock before 5 purchases", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2);
    });
    it("Should update clock after 5 purchases", async function () {
      console.log(await ethers.provider.getBlockNumber());
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2);
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2);
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatMevGG.connect(addr2).incrementCounter();
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2-1);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatMevGG.connect(addr2).incrementCounter();
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2-2);
      let counter = 0;
      for (let i=0; i < 30; i++) {
        await hardhatMevGG.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2-2-counter);
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatMevGG.getTimeLeft()).to.equal(startTime2-3-counter+increment2);
    });
    it("Should end game", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      let counter = 0;
      for (let i=0; i < startTime2; i++) {
        await hardhatMevGG.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatMevGG.getTimeLeft()).to.equal(0);
      await expect(hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice })).to.be.reverted;
    });
    it("Winner can get jackpot", async function () {
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      let counter = 0;
      for (let i=0; i < startTime2; i++) {
        await hardhatMevGG.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatMevGG.getTimeLeft()).to.equal(0);
      await expect(hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice })).to.be.reverted;
      winnerBalanceBeforeClaim = await ethers.provider.getBalance(addr2.address);
      jackpot = await hardhatMevGG.jackpot()
      console.log(ethers.utils.formatEther(winnerBalanceBeforeClaim), ethers.utils.formatEther(jackpot));
      console.log(ethers.utils.formatEther(keyPrice));
      console.log(ethers.utils.formatEther(keyPrice.mul(10000 * 5 * .495).div(10000)));
      await expect(hardhatMevGG.connect(addr1).jackpotPayout()).to.be.reverted;
      await hardhatMevGG.connect(addr2).jackpotPayout();
      winnerBalanceAfterClaim = await ethers.provider.getBalance(addr2.address);
      expectedWinnerBalance = winnerBalanceBeforeClaim.add(jackpot);
      console.log(ethers.utils.formatEther(winnerBalanceAfterClaim), ethers.utils.formatEther(expectedWinnerBalance));
      expect(await ethers.provider.getBalance(addr2.address)).to.be.closeTo(winnerBalanceBeforeClaim.add(jackpot), ethers.utils.parseEther("0.001"));
      expect(await hardhatMevGG.jackpot()).to.equal(0);
      await expect(hardhatMevGG.connect(addr2).jackpotPayout()).to.be.reverted;
      expect(await hardhatMevGG.whoWon()).to.equal(addr2.address);
    });
    it("Withdraw dividends after jackpot claimed", async function () {
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      let counter = 0;
      for (let i=0; i < startTime2; i++) {
        await hardhatMevGG.connect(addr2).incrementCounter();
        counter += 1;
      }
      jackpot = await hardhatMevGG.jackpot()
      console.log(jackpot);
      await expect(hardhatMevGG.connect(addr1).jackpotPayout()).to.be.reverted;
      await hardhatMevGG.connect(addr2).jackpotPayout();
      expect(await hardhatMevGG.jackpot()).to.equal(0);
      await expect(hardhatMevGG.connect(addr2).jackpotPayout()).to.be.reverted;
      addr1Balance = await ethers.provider.getBalance(addr1.address);
      dividendsAddr1 = await hardhatMevGG.connect(addr1).getClaimableDivvies(addr1.address);
      console.log(ethers.utils.formatEther(dividendsAddr1));
      await hardhatMevGG.connect(addr1).withdrawDivvies();
      expect(await ethers.provider.getBalance(addr1.address)).to.be.closeTo(addr1Balance.add(dividendsAddr1), ethers.utils.parseEther("0.0001"));
    });
    it("Withdraw dividends before jackpot claimed", async function () {
      await hardhatMevGG.connect(addr1).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatMevGG.connect(addr2).purchaseKeys(1, { value: keyPrice });
      addr1Balance = await ethers.provider.getBalance(addr1.address);
      addr2Balance = await ethers.provider.getBalance(addr2.address);
      dividendsAddr1 = await hardhatMevGG.connect(addr1).getClaimableDivvies(addr1.address);
      dividendsAddr2 = await hardhatMevGG.connect(addr1).getClaimableDivvies(addr2.address);
      console.log(ethers.utils.formatEther(dividendsAddr1));
      console.log(ethers.utils.formatEther(dividendsAddr2));
      await hardhatMevGG.connect(addr1).withdrawDivvies();
      await hardhatMevGG.connect(addr2).withdrawDivvies();
      expect(await ethers.provider.getBalance(addr1.address)).to.be.closeTo(addr1Balance.add(dividendsAddr1), ethers.utils.parseEther("0.0001"));
      expect(await ethers.provider.getBalance(addr2.address)).to.be.closeTo(addr2Balance.add(dividendsAddr2), ethers.utils.parseEther("0.0001"));
    });
  });
});
