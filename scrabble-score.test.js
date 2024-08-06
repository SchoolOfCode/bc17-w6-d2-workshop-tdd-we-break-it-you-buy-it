import { calculateScrabbleScore, onePoint, twoPoint, threePoint, fourPoint, fivePoint, eightPoint, tenPoint } from "./scrabble-score";
import { test, expect } from "vitest"

// test to make sure 'a' returns a score of 1
test(onePoint, 'the one point letters returns a score of 1', (r) => {
    expect(calculateScrabbleScore(r)).toBe(1)
});

test('the two point letters returns a score of 2', () => {
    expect(calculateScrabbleScore(twoPoint)).toBe(2)
})

test('the three point letters returns a score of 3', () => {
    expect(calculateScrabbleScore(threePoint)).toBe(3)
})

test('the four point letters returns a score of 4', () => {
    expect(calculateScrabbleScore(fourPoint)).toBe(4)
})

test('the five point letters returns a score of 5', () => {
    expect(calculateScrabbleScore(fivePoint)).toBe(5)
})

test('the eight point letters returns a score of 8', () => {
    expect(calculateScrabbleScore(eightPoint)).toBe(8)
})

test('the ten point letters returns a score of 10', () => {
    expect(calculateScrabbleScore(tenPoint)).toBe(10)
})