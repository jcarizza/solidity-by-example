import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { expect } from "chai";
  import { ethers } from "hardhat";
  
  describe("FirstApp", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployFirstApp() {
      
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
  
      const FirstApp = await ethers.getContractFactory("Counter");
      const firstApp = await FirstApp.deploy();
  
      return { firstApp, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should increment counter by 1", async function () {
            const {firstApp, owner, otherAccount} = await loadFixture(deployFirstApp);
            await firstApp.inc();
            let algo = await firstApp.count();
            expect(algo).to.be.equal(1);
        })
    });

    describe("Deployment", function () {
      it("Should decrease counter to 1", async function () {
          const {firstApp, owner, otherAccount} = await loadFixture(deployFirstApp);
          await firstApp.inc();
          await firstApp.inc();
          expect(await firstApp.count()).to.be.equal(2);
          await firstApp.dec()
          expect(await firstApp.count()).to.be.equal(1);
      })
  });
  });
  