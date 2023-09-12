import { expect, test, it, describe } from "vitest";
import multiply from "../utils/multiply";

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

it("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

describe("multiply", () => {
  test("two numbers multiply less than 10", () => {
    expect(multiply(2, 3)).toBeTruthy();
  });

  test("two numbers multiply more than 10", () => {
    expect(multiply(4, 3)).toBeFalsy();
  });
});
