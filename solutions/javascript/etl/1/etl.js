//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (pointLetterObject) => {
  let totalScoresLetters = {}
  Object.keys(pointLetterObject).forEach(key => {
    let letters = pointLetterObject[key];
    for(let i = 0; i < letters.length; i++){
      let letter = letters[i].toLowerCase();
      totalScoresLetters[letter] = +key;
    }
  });
  return totalScoresLetters;
};
