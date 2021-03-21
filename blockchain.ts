import { Block } from "./block";
import { cryptoHash } from "./crypto-hash";

export class BlockChain {
  chain: Block[];

  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }: { data: string[] }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }

  static isValidChain(chain: Block[]): any {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const actualLastHash = chain[i - 1].hash;

      const { timestamp, data, hash, lastHash } = block;
      if (lastHash != actualLastHash) {
        return false;
      }

      const validatedHash = cryptoHash(timestamp, lastHash, data);

      if (hash != validatedHash) {
        return false;
      }
    }

    return true;
  }

  replaceChain(chain: Block[]) {
    if (chain.length <= this.chain.length) {
      console.error("The incoming chain must be longer");
      return;
    }
    if (!BlockChain.isValidChain(chain)) {
      console.error("The incoming chain must be valid");
      return;
    }
    console.log("replacing chain with", chain);
    this.chain = chain;
  }
}
