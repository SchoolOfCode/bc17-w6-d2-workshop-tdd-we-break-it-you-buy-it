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

test.each(onePoint)("the letter %s returns a score of 1", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(1);
});

test.each(twoPoint)("the letter %s returns a score of 2", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(2);
});

test.each(threePoint)("the letter %s returns a score of 3", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(3);
});

test.each(fourPoint)("the letter %s returns a score of 4", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(4);
});

test.each(fivePoint)("the letter %s returns a score of 5", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(5);
});

test.each(eightPoint)("the letter %s returns a score of 8", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(8);
});

test.each(tenPoint)("the letter %s returns a score of 10", (letter) => {
  expect(calculateScrabbleScore(letter)).toBe(10);
});

// Test that the total of the word ICED will return 7
test("Total of the word ICED equals 7", () => {
  expect(calculateScrabbleScore("ICED")).toBe(7);
});

// Test that an error is thrown if any character is outside of A-Z
test("Test that anything other than A-Z throws an error", () => {
  expect(() => calculateScrabbleScore("1CED")).toThrowError(
    "Can only contain letters from A-Z"
  );
});

// Test that a player gets an extra 50 points if they use all 7 tiles
test("Test that using all 7 tiles gives 50 extra points", () => {
  expect(calculateScrabbleScore("RETURNS")).toBe(57);
});

// Test that answers can be submitted in any case
test("Test case insensitivity", () => {
  expect(calculateScrabbleScore("iced")).toBe(7);
  expect(calculateScrabbleScore("iCed")).toBe(7);
});
