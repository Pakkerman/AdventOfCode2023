import { expect, test, describe } from "bun:test";
import input from "../input.txt";
import example from "../example.txt";
import { partOne, partTwo } from "./main.ts";

describe("Day 15", () => {
  test("part1, example", () => {
    const actual = partOne(example);
    const expected = 0;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part1, input", () => {
    const actual = partOne(input);
    const expected = 0;
    console.log(actual);
    expect(actual).toBe(expected);
  });

  test("part2, example", () => {
    const actual = partTwo(example);
    const expected = 0;
    console.log(actual);
    expect(actual).toBe(expected);
  });
  //
  // test("part2, input", () => {
  //   const actual = partTwo(input);
  //   const expected = 0;
  //   console.log(actual);
  //   expect(actual).toBe(expected);
  // });
});
