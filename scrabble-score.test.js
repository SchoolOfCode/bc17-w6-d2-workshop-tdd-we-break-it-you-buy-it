import {
  calculateScrabbleScore,
  onePoint,
  twoPoint,
  threePoint,
  fourPoint,
  fivePoint,
  eightPoint,
  tenPoint,
} from "./scrabble-score";
import { test, expect } from "vitest";

// test to make sure 'a' returns a score of 1
// test("the one point letters returns a score of 1", () => {
//   expect(
//     onePoint.forEach((e) => {
//       calculateScrabbleScore(e);
//     })
//   ).toBe(1);
// });

test.each(onePoint)("the letter %s returns a score of 1", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(1)
})

test.each(twoPoint)("the letter %s returns a score of 2", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(2)
})

test.each(threePoint)("the letter %s returns a score of 3", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(3)
})

test.each(fourPoint)("the letter %s returns a score of 4", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(4)
})

test.each(fivePoint)("the letter %s returns a score of 5", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(5)
})

test.each(eightPoint)("the letter %s returns a score of 8", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(8)
})

test.each(tenPoint)("the letter %s returns a score of 10", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(10)
})

// test("the two point letters returns a score of 2", () => {
//   expect(calculateScrabbleScore(twoPoint)).toBe(2);
// });

// test("the three point letters returns a score of 3", () => {
//   expect(calculateScrabbleScore(threePoint)).toBe(3);
// });

// test("the four point letters returns a score of 4", () => {
//   expect(calculateScrabbleScore(fourPoint)).toBe(4);
// });

// test("the five point letters returns a score of 5", () => {
//   expect(calculateScrabbleScore(fivePoint)).toBe(5);
// });

// test("the eight point letters returns a score of 8", () => {
//   expect(calculateScrabbleScore(eightPoint)).toBe(8);
// });

// test("the ten point letters returns a score of 10", () => {
//   expect(calculateScrabbleScore(tenPoint)).toBe(10);
// });
