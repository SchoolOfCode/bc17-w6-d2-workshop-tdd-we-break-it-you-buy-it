export const onePoint = ["a", "e", "i", "l", "n", "o", "r", "s", "t", "u"];
export const twoPoint = ["d", "g"];
export const threePoint = ["b", "c", "m", "p"];
export const fourPoint = ["f", "h", "v", "w", "y"];
export const fivePoint = ["k"];
export const eightPoint = ["j", "x"];
export const tenPoint = ["q", "z"];

export function calculateScrabbleScore(word) {
  switch (word) {
    // if letter is included in the onePoint array, return a value of 1
    case onePoint:
      return 1;
    // if letter is included in the twoPoint array, return a value of 2
    case twoPoint:
      return 2;
    case threePoint:
      return 3;
    case fourPoint:
      return 4;
    case fivePoint:
      return 5;
    case eightPoint:
      return 8;
    case tenPoint:
      return 10;
  }
}
