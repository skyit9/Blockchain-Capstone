var SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol');
var Verifier = artifacts.require('Verifier');
const zokratesProof = require("../../zokrates/code/square/proof.json");



contract("TestSolnSquareVerifier", accounts => {
    const tokenID = 1;
    const CONTRACT_NAME = "RealEstate Marketplace"
    const CONTRACT_SYMBOL = "SKY"

    beforeEach(async() => {
        let squareVerifierContract = await Verifier.new({from: accounts[0]});
        this.contract = await SolnSquareVerifier.new(squareVerifierContract.address, CONTRACT_NAME, CONTRACT_SYMBOL, {from: accounts[0]});
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it("A new solution can be added for contract", async() => {
        let result = false;

        try {
            console.log(...Object.values(zokratesProof.proof))
            console.log(zokratesProof.inputs)
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, accounts[1], tokenID, { from: accounts[1] });
            result = true;
        } 
        catch(e) {
            console.log(e);
            result = false;
        }
        assert.equal(result, true);
    });

    it("A new solution can not be added for contract if the proof was used previously", async() => {
        let result = false;

        try {
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, accounts[1], tokenID, { from: accounts[1] });
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, accounts[1], tokenID + 1, { from: accounts[1] });
            result = true;
        } catch(e) {
            // console.log(e);
            result = false;
            let reason = "solution has already been used previously; create a new one using ZoKrates";
            assert.equal(e.toString().includes(reason), true);
        }

        assert.equal(result, false);
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it("An ERC721 token can be minted for contract", async() => {
        let result = false;
        try {
            await this.contract.submitSolution(...Object.values(zokratesProof.proof), zokratesProof.inputs, accounts[1], tokenID, { from: accounts[1] });
            await this.contract.mint(accounts[1], tokenID, { from: accounts[0] });
            result = true
        } catch(e) {
            console.log(e);
            result = false;
        }
        assert.equal(result, true);
    });
});
