import { GENESIS_DATA } from "./config";
import { cryptoHash } from "./crypto-hash";

type BlockFields = {
  timestamp: number;
  lastHash: string;
  hash: string;
  data: string[];
};

export class Block {
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

  static mineBlock({ lastBlock, data }: { lastBlock: Block; data: string[] }) {
    const timestamp = Date.now();
    return new this({
      hash: cryptoHash(timestamp, lastBlock.hash, data),
      timestamp,
      lastHash: lastBlock.hash,
      data,
    });
  }

  static genesis() {
    return new Block(GENESIS_DATA);
  }
}
