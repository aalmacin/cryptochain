import { GENESIS_DATA } from "./config";

type BlockFields = {
  timestamp: number;
  lastHash: string;
  hash: string;
  data: string[];
};

export class Block {
  static genesis() {
    return new Block(GENESIS_DATA);
  }
  timestamp: BlockFields["timestamp"];
  lastHash: BlockFields["lastHash"];
  hash: BlockFields["hash"];
  data: BlockFields["data"];
  constructor({ timestamp, lastHash, hash, data }: BlockFields) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}
