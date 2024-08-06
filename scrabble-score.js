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
  else if (twoPoint.includes(letter)){
    return 2
  } 
  else if (threePoint.includes(letter)){
    return 3
  }
    else if (fourPoint.includes(letter)){
        return 4
    }
    else if (fivePoint.includes(letter)){
        return 5
    }
    else if (eightPoint.includes(letter)){
        return 8
    }
    else if (tenPoint.includes(letter)){
        return 10
    }
}