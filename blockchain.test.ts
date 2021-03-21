import { Block } from "./block";
import { BlockChain } from "./blockchain";

describe("Blockchain", () => {
  let blockchain: BlockChain;

  beforeEach(() => {
    blockchain = new BlockChain();
  });

  test("contains a `chain` Array instance", () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  test("starts with the genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  test("adds a new block to the chain", () => {
    const newData = ["foo", "bar"];
    blockchain.addBlock({ data: newData });

    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });

  describe("isValidChain()", () => {
    describe("when the chain does not start with the genesis block", () => {
      test("returns false", () => {
        blockchain.chain[0] = { data: ["fake-genesis"] } as Block;
        expect(BlockChain.isValidChain(blockchain.chain)).toBe(false);
      });
    });
    describe("when the chain starts with the genesis block and has multiple blocks", () => {
      beforeEach(() => {
        blockchain.addBlock({ data: ["Bears"] });
        blockchain.addBlock({ data: ["Beets"] });
        blockchain.addBlock({ data: ["Battlestar Galactica"] });
      });
      describe("and a lastHash reference has changed", () => {
        test("returns false", () => {
          blockchain.chain[2].lastHash = "broken-lastHash";
          expect(BlockChain.isValidChain(blockchain.chain)).toBe(false);
        });
      });
      describe("and the chain contains a block with an invalid field", () => {
        test("returns false", () => {
          blockchain.chain[2].data = ["some-bad-and-evil-data"];
          expect(BlockChain.isValidChain(blockchain.chain)).toBe(false);
        });
      });
      describe("and the chain does not contain any invalid blocks", () => {
        test("returns true", () => {
          expect(BlockChain.isValidChain(blockchain.chain)).toBe(true);
        });
      });
    });
  });
});
