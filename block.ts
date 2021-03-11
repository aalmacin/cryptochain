type BlockFields = {
  timestamp: string;
  lastHash: string;
  hash: string;
  data: string;
};

export class Block {
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
