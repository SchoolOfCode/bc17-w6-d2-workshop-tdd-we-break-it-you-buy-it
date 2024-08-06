export const onePoint = ["a", "e", "i", "l", "n", "o", "r", "s", "t", "u"];
export const twoPoint = ["d", "g"];
export const threePoint = ["b", "c", "m", "p"];
export const fourPoint = ["f", "h", "v", "w", "y"];
export const fivePoint = ["k"];
export const eightPoint = ["j", "x"];
export const tenPoint = ["q", "z"];

export function calculateScrabbleScore(letter) {
  if (onePoint.includes(letter)) {
    return 1
  }
}
