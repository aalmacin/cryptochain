import { cryptoHash } from "./crypto-hash";

describe("cryptoHash", () => {
  const fooHash =
    "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae";

  test("generates a SHA-256 hashed output", () => {
    expect(cryptoHash("foo")).toBe(fooHash);
  });

  test("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toBe(
      cryptoHash("three", "one", "two")
    );
  });
});
