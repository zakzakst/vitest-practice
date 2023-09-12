import { expect, test, it } from "vitest";
import multiply from "../utils/multiply";

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

it("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("takes two numbers as arguments and multiplies them", () => {
  expect(multiply(2, 3)).toBe(6);
});
