import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from "vitest"

const onePoint = ['a', 'e', 'i', 'l', 'n', 'o', 'r', 's', 't', 'u']
const twoPoint = ['d', 'g']
const threePoint = ['b', 'c', 'm', 'p']
const fourPoint = ['f', 'h', 'v', 'w', 'y']
const fivePoint = ['k']
const eightPoint = ['j', 'x']
const tenPoints = ['q', 'z']

// test to make sure 'a' returns a score of 1
test('the word "a" returns a score of 1', () => {
    expect(calculateScrabbleScore('a')).toBe(1)
})