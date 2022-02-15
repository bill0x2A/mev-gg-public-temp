const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FomoOE contract", function () {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let FomoOE;
  let hardhatFomoOE;
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
    FomoOE = await ethers.getContractFactory("FomoOE");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    hardhatFomoOE = await FomoOE.deploy(startTime1, increment1, initialKeyPrice);

    // We can interact with the contract by calling `hardhatToken.method()`
    await hardhatFomoOE.deployed();
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
      expect(await hardhatFomoOE.developer()).to.equal(owner.address);
    });

    it("Total number of keys purchased should equal 0", async function () {
      expect(await hardhatFomoOE.keyPurchases()).to.equal(0);
    });
    it("Total time left should be 86400", async function () {
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(86400);
    });
  });

  describe("Playing the game", function () {
    it("Should purchase a key", async function () {
      keyPrice = await hardhatFomoOE.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      buyTx = await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.keyPurchases()).to.equal(1);
      newKeyPrice = await hardhatFomoOE.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
    });
    it("Should purchase another key", async function () {
      keyPrice = await hardhatFomoOE.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.keyPurchases()).to.equal(1);
    });
    it("Should purchase 2 keys", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(2, { value: 2*keyPrice });
      expect(await hardhatFomoOE.totalKeys()).to.equal(2);
      newKeyPrice = await hardhatFomoOE.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
      await hardhatFomoOE.connect(addr2).purchaseKeys(5, { value: keyPrice.mul(5) });
      expect(await hardhatFomoOE.totalKeys()).to.equal(7);
      await hardhatFomoOE.connect(addr2).purchaseKeys(10, { value: keyPrice.mul(10) });
      expect(await hardhatFomoOE.totalKeys()).to.equal(17);
      await hardhatFomoOE.connect(addr2).purchaseKeys(2, { value: 2*keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(2, { value: 2*keyPrice });
    });
    it("Should update winning", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.totalKeys()).to.equal(1);
      expect(await hardhatFomoOE.getWinner()).to.equal(addr2.address);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.totalKeys()).to.equal(2);
      expect(await hardhatFomoOE.getWinner()).to.equal(addr1.address);
    });
    it("Should not update clock before 5 purchases", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(86400);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(86400);
    });
    it("Should update clock after 5 purchases", async function () {
      console.log(await ethers.provider.getBlockNumber());
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime1);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime1);
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime1);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatFomoOE.connect(addr2).incrementCounter();
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime1-1);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatFomoOE.connect(addr2).incrementCounter();
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime1-2);
      let counter = 0;
      for (let i=0; i < 30; i++) {
        await hardhatFomoOE.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime1-32);
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime1-3);
    });
  });
});

describe("FomoOE sped up", function () {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let FomoOE;
  let hardhatFomoOE;
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
    FomoOE = await ethers.getContractFactory("FomoOE");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    hardhatFomoOE = await FomoOE.deploy(startTime2, increment2, initialKeyPrice);

    // We can interact with the contract by calling `hardhatToken.method()`
    await hardhatFomoOE.deployed();
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
      expect(await hardhatFomoOE.developer()).to.equal(owner.address);
    });

    it("Total number of keys purchased should equal 0", async function () {
      expect(await hardhatFomoOE.keyPurchases()).to.equal(0);
    });
    it("Total time left should be equal to start time", async function () {
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2);
    });
  });

  describe("Playing the game", function () {
    it("Should purchase a key", async function () {
      keyPrice = await hardhatFomoOE.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      buyTx = await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.keyPurchases()).to.equal(1);
      newKeyPrice = await hardhatFomoOE.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
    });
    it("Should purchase another key", async function () {
      keyPrice = await hardhatFomoOE.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.keyPurchases()).to.equal(1);
    });
    it("Should purchase 2 keys", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(2, { value: keyPrice.mul(2) });
      expect(await hardhatFomoOE.totalKeys()).to.equal(2);
      newKeyPrice = await hardhatFomoOE.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice);
      await hardhatFomoOE.connect(addr2).purchaseKeys(5, { value: keyPrice.mul(5) });
      expect(await hardhatFomoOE.totalKeys()).to.equal(7);
      await hardhatFomoOE.connect(addr2).purchaseKeys(10, { value: keyPrice.mul(10) });
      expect(await hardhatFomoOE.totalKeys()).to.equal(17);
      await hardhatFomoOE.connect(addr2).purchaseKeys(2, { value: keyPrice.mul(2) });
      await hardhatFomoOE.connect(addr2).purchaseKeys(2, { value: keyPrice.mul(2) });
    });
    it("Should update winning", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.totalKeys()).to.equal(1);
      expect(await hardhatFomoOE.getWinner()).to.equal(addr2.address);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.totalKeys()).to.equal(2);
      expect(await hardhatFomoOE.getWinner()).to.equal(addr1.address);
    });
    it("Should not update clock before 5 purchases", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2);
    });
    it("Should update clock after 5 purchases", async function () {
      console.log(await ethers.provider.getBlockNumber());
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2);
      await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2);
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatFomoOE.connect(addr2).incrementCounter();
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2-1);
      console.log(await ethers.provider.getBlockNumber());
      await hardhatFomoOE.connect(addr2).incrementCounter();
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2-2);
      let counter = 0;
      for (let i=0; i < 30; i++) {
        await hardhatFomoOE.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2-2-counter);
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(startTime2-3-counter+increment2);
    });
    it("Should end game", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      let counter = 0;
      for (let i=0; i < startTime2; i++) {
        await hardhatFomoOE.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(0);
      await expect(hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice })).to.be.reverted;
    });
    it("Winner can get jackpot", async function () {
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      await hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice });
      let counter = 0;
      for (let i=0; i < startTime2; i++) {
        await hardhatFomoOE.connect(addr2).incrementCounter();
        counter += 1;
      }
      console.log(counter);
      expect(await hardhatFomoOE.getTimeLeft()).to.equal(0);
      await expect(hardhatFomoOE.connect(addr2).purchaseKeys(1, { value: keyPrice })).to.be.reverted;
      winnerBalanceBeforeClaim = await ethers.provider.getBalance(addr2.address);
      jackpot = await hardhatFomoOE.jackpot()
      console.log(ethers.utils.formatEther(winnerBalanceBeforeClaim), ethers.utils.formatEther(jackpot));
      console.log(ethers.utils.formatEther(keyPrice));
      console.log(ethers.utils.formatEther(keyPrice.mul(10000 * 5 * .495).div(10000)));
      await hardhatFomoOE.connect(addr2).jackpotPayout();
      winnerBalanceAfterClaim = await ethers.provider.getBalance(addr2.address);
      expectedWinnerBalance = winnerBalanceBeforeClaim.add(jackpot);
      console.log(ethers.utils.formatEther(winnerBalanceAfterClaim), ethers.utils.formatEther(expectedWinnerBalance));
      expect(await ethers.provider.getBalance(addr2.address)).to.be.closeTo(winnerBalanceBeforeClaim.add(jackpot), ethers.utils.parseEther("0.001"));
    });
  });
});
