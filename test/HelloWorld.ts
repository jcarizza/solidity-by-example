import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import { ethers } from "hardhat";
  
  describe("HelloWorld", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployHelloWorld() {
      
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
  
      const HelloWorld = await ethers.getContractFactory("HelloWorld");
      const helloWorld = await HelloWorld.deploy();
  
      return { helloWorld, owner, otherAccount };
    }

  describe("HelloWorld", function () {
      describe("Events", function () {
        it("Should emit an event on withdrawals", async function () {})
      });

    });
  });
  