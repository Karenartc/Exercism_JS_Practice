//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  const phraseLowerCase = phrase.toLowerCase();
  const words = phraseLowerCase.match(/\b[\w']+\b/g) || [];
  let counts = {};

  for (let word of words){
    let cleanWord = word.replace(/^'+|'+$/g, '');

    counts[cleanWord] = (counts[cleanWord] || 0) + 1;
  }

  return counts;
};
