//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let sentenceLowerCase = sentence.toLowerCase();
  let increment = 0;
  for (let caracter of ALPHABET){
    if (sentenceLowerCase.includes(caracter)){
      increment++
    }
  }
  return (increment >= 26);
};

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';