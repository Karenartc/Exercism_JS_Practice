//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (letter) => {
  const complement = {
                      G: 'C',
                      C: 'G',
                      T: 'A',
                      A: 'U'
                     };
  return letter.split('').map(caracter => complement[caracter]).join('');
};
