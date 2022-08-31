# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

- Truffle(develop)> version
~~~
    Truffle v5.4.29 (core: 5.4.29)
    Solidity v0.5.16 (solc-js)
    Node v14.20.0
    Web3.js v1.5.3
~~~

- Zokrates:

	https://andresaaap.medium.com/creating-simple-zero-knowledge-verifier-contract-with-zokrates-0-5-0-solidity-0-5-0-13e9d615fe80

- UT Test:
~~~
  Contract: TestERC721Mintable
    match erc721 spec
      √ should return total supply (191ms)
      √ should get token balance (353ms)
      √ should return token uri (145ms)
      √ should transfer token from one owner to another (1734ms)
    have ownership properties
      √ should fail when minting when address is not contract owner (1072ms)
      √ should return contract owner (140ms)

  Contract: TestSolnSquareVerifier
    √ A new solution can be added for contract (6478ms)
    √ A new solution can not be added for contract if the proof was used previously (9564ms)
    √ An ERC721 token can be minted for contract (7398ms)

  Contract: TestVerifier
    √ Test verification with correct proof (1899ms)
    √ Test verification with incorrect proof (1710ms)

  11 passing (3m)
~~~

- Deploy to Rinkeby:
~~~
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29970705 (0x1c95111)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x6daee901a5632575917a023c64560a730cfc77a6120d123226d53f42f738343c
   > Blocks: 2            Seconds: 21
   > contract address:    0x7bf80C1Cb0c4324092e4e9D861f7aEfb96817D20
   > block number:        11293294
   > block timestamp:     1661866822
   > account:             0x29AA521eb09aaabAd0C4b9509f897337c3df371c
   > balance:             0.99773463
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================

   Replacing 'SkyERC721Token'
   --------------------------
   > transaction hash:    0xa4237c79eec16698db5a7d4b11f5b41fb98c0df60c536156043466ddbbd20e5b
   > Blocks: 1            Seconds: 13
   > contract address:    0xB4250AF4B8Af3e217c6dd10ba79A47C0642d7DbD
   > block number:        11293296
   > block timestamp:     1661866852
   > account:             0x29AA521eb09aaabAd0C4b9509f897337c3df371c
   > balance:             0.96597124
   > gas used:            3130576 (0x2fc4d0)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03130576 ETH


   Replacing 'Verifier'
   --------------------
   > transaction hash:    0x2af6bea5573959ac4931d50d1f8f6a166e8e2f4d417701b21438b53247ee2c26
   > Blocks: 1            Seconds: 9
   > contract address:    0xd3fC542E784FC41bA8b00696aB44d567f90c3212
   > block number:        11293297
   > block timestamp:     1661866867
   > account:             0x29AA521eb09aaabAd0C4b9509f897337c3df371c
   > balance:             0.95604657
   > gas used:            992467 (0xf24d3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00992467 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xc1b8aac0117204b0e46c2600feb150520691be1bf42cd84cda89a4a090caa8cd
   > Blocks: 1            Seconds: 9
   > contract address:    0x3b2c349bFC7D1F4A3B990234701DE6479e4C4040
   > block number:        11293298
   > block timestamp:     1661866882
   > account:             0x29AA521eb09aaabAd0C4b9509f897337c3df371c
   > balance:             0.91952522
   > gas used:            3652135 (0x37ba27)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03652135 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.07775178 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.08001715 ETH
~~~

- Contract Address:
~~~
  	"SkyERC721Token": "0xB4250AF4B8Af3e217c6dd10ba79A47C0642d7DbD",
	"Verifier": "0xd3fC542E784FC41bA8b00696aB44d567f90c3212",
	"SolnSquareVerifier": "0x3b2c349bFC7D1F4A3B990234701DE6479e4C4040"
~~~

- Mint token:

    Follow this video to interact with Contract: https://www.youtube.com/watch?v=8MChn-NJJB0&ab_channel=AndresPinzon

- Opensea collection: 
    https://testnets.opensea.io/collection/realestate-marketplace-rk9vutejjr

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
