export const onePoint = ["a", "e", "i", "l", "n", "o", "r", "s", "t", "u"];
export const twoPoint = ["d", "g"];
export const threePoint = ["b", "c", "m", "p"];
export const fourPoint = ["f", "h", "v", "w", "y"];
export const fivePoint = ["k"];
export const eightPoint = ["j", "x"];
export const tenPoint = ["q", "z"];

export function calculateScrabbleScore(word) {
  let score = 0
  if (typeof word !== "string") {
    throw new Error("Letters only")
  }
  word = word.toLowerCase()
  if (word.length === 7) {
    score += 50
  }
  for (let i = 0; i < word.length; i++) {
    if (onePoint.includes(word.charAt(i))) {
      score += 1
    } 
    else if (twoPoint.includes(word.charAt(i))){
      score += 2
    } 
    else if (threePoint.includes(word.charAt(i))){
      score += 3
    }
    else if (fourPoint.includes(word.charAt(i))){
      score += 4
    }
    else if (fivePoint.includes(word.charAt(i))){
      score += 5
    }
    else if (eightPoint.includes(word.charAt(i))){
      score += 8
    }
    else if (tenPoint.includes(word.charAt(i))){
      score += 10
    }
    else {
      throw new Error("Letters only")
    }
  }
  return score
}