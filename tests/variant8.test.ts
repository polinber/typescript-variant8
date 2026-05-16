import { describe, it, expect } from "vitest";
import { y } from "../src/variant8";

describe("variant 8 function", () => {
  it("should return a number for x=0.7", () => {
    const result = y(0.7);
    expect(result).toBeCloseTo(0.326333, 5);
  });
});
