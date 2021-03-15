import { Block } from "./block";
import { BlockChain } from "./blockchain";

describe("Blockchain", () => {
  const blockchain = new BlockChain();

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
});
