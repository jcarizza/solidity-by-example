import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { expect } from "chai";
  import { ethers } from "hardhat";
  
  describe("FirstApp", function () {
      async function deployFirstApp() {
      
      const [owner, otherAccount] = await ethers.getSigners();
  
      const FirstApp = await ethers.getContractFactory("Counter");
      const firstApp = await FirstApp.deploy();
  
      return { firstApp, owner, otherAccount };
    }

    describe("Test increment", function () {
        it("Should increment counter by 1", async function () {
            const {firstApp, owner, otherAccount} = await loadFixture(deployFirstApp);
            await firstApp.inc();
            let algo = await firstApp.count();
            expect(algo).to.be.equal(1);
        })
    });

    describe("Test decrease", function () {
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
  