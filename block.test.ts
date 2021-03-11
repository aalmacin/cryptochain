import { Block } from "./block";

describe("Block", () => {
  const timestamp = "a-date";
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
});
