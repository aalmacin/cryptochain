type BlockFields = {
  timestamp: string;
  lastHash: string;
  hash: string;
  data: string;
};

class Block {
  private timestamp: BlockFields["timestamp"];
  private lastHash: BlockFields["lastHash"];
  private hash: BlockFields["hash"];
  private data: BlockFields["data"];
  constructor({ timestamp, lastHash, hash, data }: BlockFields) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block({
  timestamp: "01/01/01",
  lastHash: "foo-lastHash",
  hash: "foo-hash",
  data: "foo-data",
});
console.log("block1", block1);
