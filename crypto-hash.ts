import { createHash } from "crypto";

export const cryptoHash = (...args: any[]) => {
  const hash = createHash("sha256");
  hash.update(args.sort().join(" "));
  return hash.digest("hex");
};
