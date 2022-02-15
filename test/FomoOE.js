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
  const initialKeyPrice = 3366666666666000;

  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    FomoOE = await ethers.getContractFactory("FomoOE");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    hardhatFomoOE = await FomoOE.deploy();

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
      expect(newKeyPrice).to.equal(initialKeyPrice*1.01);
    });
    it("Should purchase another key", async function () {
      keyPrice = await hardhatFomoOE.keyPrice();
      expect(keyPrice).to.equal(initialKeyPrice);
      buyTx = await hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice });
      expect(await hardhatFomoOE.keyPurchases()).to.equal(1);
      newKeyPrice = await hardhatFomoOE.keyPrice();
      expect(newKeyPrice).to.equal(initialKeyPrice*1.01);
      console.log(await ethers.provider.estimateGas(hardhatFomoOE.connect(addr1).purchaseKeys(1, { value: keyPrice*1.01 })))
    });
  });
});
