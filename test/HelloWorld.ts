import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import { ethers } from "hardhat";
  
  describe("HelloWorld", function () {
    async function deployHelloWorld() {
      
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
  
      const HelloWorld = await ethers.getContractFactory("HelloWorld");
      const helloWorld = await HelloWorld.deploy();
  
      return { helloWorld, owner, otherAccount };
    }

  describe("Greet should be Hello World!", function () {
      describe("Events", function () {
        it("Test greet is ok", async function () {
          let { helloWorld } = await loadFixture(deployHelloWorld);
          let greet = await helloWorld.greet();
          expect(greet).to.be.equal("Hello World!");
        })
      });
    });
  });
  