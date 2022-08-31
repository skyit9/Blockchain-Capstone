#!/usr/bin/env node
'use strict';

const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraKey = "";
const mnemonic = "";

// Get contract file
const contractInfo = require('./build/contracts/SolnSquareVerifier');

// Read configuration (contract addresses)
const config = require('./config.json');

// - Path to the proof.json
const proof = require("../zokrates/code/square/proof.json");
// - Token ID
const argv = process.argv.slice(1);
const tokenId = argv[0];

(async() => {
  const provider = await new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`, 0);
  const web3 = await new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  const contract = await new web3.eth.Contract(contractInfo.abi, config.SolnSquareVerifier, { gasLimit: "4500000" });

  console.log(`Submitting solution:\n- Input: ${proof.inputs}\n- Token ID: ${tokenId}\n- Address: ${accounts[0]}`);

  try {
    let result = await contract.methods.submitSolution(...Object.values(proof.proof), proof.inputs, accounts[0], tokenId).send({ from: accounts[0], gas: 2500000});
    console.log(result)
  } catch(err) {
    throw (err);
  }

  process.exit(1);
  process.kill(process.pid);
})();