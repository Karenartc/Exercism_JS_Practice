//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  if(number < 1 || number > 31) return [];

  let secretCode = [];

  if(number & 1) secretCode.push('wink');
  if(number & 2) secretCode.push('double blink');
  if(number & 4) secretCode.push('close your eyes');
  if(number & 8) secretCode.push('jump');

  if(number & 16) secretCode.reverse();

  return secretCode;
  
};
