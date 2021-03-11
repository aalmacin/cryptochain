import { Block } from "./block";
import { GENESIS_DATA } from "./config";
import { cryptoHash } from "./crypto-hash";

describe("Block", () => {
  const timestamp = 33333;
  const lastHash = "foo-hash";
  const hash = "bar-hash";
  const data = ["blockchain", "data"];
  const block = new Block({ timestamp, lastHash, hash, data });

  test("has a timestamp, lastHash, hash, and data property", () => {
    expect(block.timestamp).toBe(timestamp);
    expect(block.lastHash).toBe(lastHash);
    expect(block.hash).toBe(hash);
    expect(block.data).toBe(data);
  });

  describe("genesis()", () => {
    const genesisBlock = Block.genesis();
    test("create genesis block", () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    test("returns correct data", () => {
      expect(genesisBlock.timestamp).toBe(GENESIS_DATA.timestamp);
      expect(genesisBlock.lastHash).toBe(GENESIS_DATA.lastHash);
      expect(genesisBlock.hash).toBe(GENESIS_DATA.hash);
      expect(genesisBlock.data).toBe(GENESIS_DATA.data);
    });
  });

  describe("mineBlock()", () => {
    const lastBlock = Block.genesis();
    const data = ["mined data"];
    const minedBlock = Block.mineBlock({
      lastBlock,
      data,
    });
    test("returns a Block instance", () => {
      expect(minedBlock instanceof Block).toBe(true);
    });
    test("sets the `lastHash` to be the `hash` of the lastBlock", () => {
      expect(minedBlock.lastHash).toBe(lastBlock.hash);
    });
    test("sets a `timestamp`", () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });

    test("creates a SHA-256 `hash` based on the proper inputs", () => {
      expect(minedBlock.hash).toBe(
        cryptoHash(minedBlock.timestamp, lastBlock.hash, data)
      );
    });
  });
});
