// migrating the appropriate contracts
var SkyERC721Token = artifacts.require("./SkyERC721Token.sol");
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async function(deployer) {
    const CONTRACT_NAME = "RealEstate Marketplace"
    const CONTRACT_SYMBOL = "SKY"

    await deployer.deploy(SkyERC721Token, CONTRACT_NAME, CONTRACT_SYMBOL);
    await deployer.deploy(Verifier);
    await deployer.deploy(SolnSquareVerifier, Verifier.address, CONTRACT_NAME, CONTRACT_SYMBOL);
};
