export const onePoint = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"];
export const twoPoint = ["D", "G"];
export const threePoint = ["B", "C", "M", "P"];
export const fourPoint = ["F", "H", "V", "W", "Y"];
export const fivePoint = ["K"];
export const eightPoint = ["J", "X"];
export const tenPoint = ["Q", "Z"];

export function calculateScrabbleScore(word) {
  let wordScore = 0;
  if (word.length === 7) {
    wordScore += 50;
  }
  if (typeof word !== "string") {
    throw new Error("Can only contain letters from A-Z");
  }
  // ensure input is capitalised
  word = word.toUpperCase();
  // loop through the provided word and add to wordScore
  for (let i = 0; i < word.length; i++) {
    if (onePoint.includes(word.charAt(i))) {
      wordScore += 1;
    } else if (twoPoint.includes(word.charAt(i))) {
      wordScore += 2;
    } else if (threePoint.includes(word.charAt(i))) {
      wordScore += 3;
    } else if (fourPoint.includes(word.charAt(i))) {
      wordScore += 4;
    } else if (fivePoint.includes(word.charAt(i))) {
      wordScore += 5;
    } else if (eightPoint.includes(word.charAt(i))) {
      wordScore += 8;
    } else if (tenPoint.includes(word.charAt(i))) {
      wordScore += 10;
    } else {
      throw new Error("Can only contain letters from A-Z");
    }
  }
  return wordScore;
}
