var SkyERC721Token = artifacts.require('SkyERC721Token');

contract('TestERC721Mintable', accounts => {

    const firstAccount = accounts[0];
    const secondAccount = accounts[1];
    const balance1 = 5;
    const balance2 = 10;
    const totalSupply = balance1 + balance2;

    const name = "RealEstate Marketplace";
    const symbol = "SKY";

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await SkyERC721Token.new(name, symbol, {from: firstAccount});

            // TODO: mint multiple tokens
            for (let i = 0; i < balance1; i++) {
                await this.contract.mint(firstAccount, i, {from: firstAccount});
            }

            for (let i = balance1; i < totalSupply; i++) {
                await this.contract.mint(secondAccount, i, {from: firstAccount});
            }
        })

        it('should return total supply', async function () { 
            let result = await this.contract.totalSupply.call();
            assert.equal(totalSupply, result);
        })

        it('should get token balance', async function () { 
            let result = await this.contract.balanceOf(firstAccount);
            assert.equal(balance1, result);

            result = await this.contract.balanceOf(secondAccount);
            assert.equal(balance2, result);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let result = await this.contract.tokenURI(1);
            assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", result);
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(secondAccount, firstAccount, (totalSupply-1), {from: secondAccount});
            let result = await this.contract.ownerOf((totalSupply-1));
            assert.equal(firstAccount, result);

            result = await this.contract.balanceOf(firstAccount);
            assert.equal(balance1 + 1, result, "account 1 gains 1 token");

            result = await this.contract.balanceOf(secondAccount);
            assert.equal(balance2 - 1, result, "account 2 loses 1 token");

            result = await this.contract.totalSupply.call();
            assert.equal(totalSupply, result, "total supply stays");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await SkyERC721Token.new(name, symbol, {from: firstAccount});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(secondAccount, 1, {from: secondAccount});
            } catch(err) {
                assert.equal(err.reason, "Caller must be the contract owner");
            }
        })

        it('should return contract owner', async function () { 
            let result = await this.contract.getOwner();
            assert.equal(firstAccount, result);
        })

    });
})