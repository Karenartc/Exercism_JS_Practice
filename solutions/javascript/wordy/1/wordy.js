//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (phrase) => {
  if(!phrase.startsWith('What is')) throw new Error('Unknown operation');

  let problem = phrase.replace('What is', '').replace('?', '').trim();

  if(!problem) throw new Error('Syntax error');

  problem = problem
    .replace(/multiplied by/g, 'multiplied')
    .replace(/divided by/g, 'divided');

   const tokens = problem.match(/-?\d+|plus|minus|multiplied|divided/g);

  if (!tokens) throw new Error('Unknown operation');

  const cleaned = problem.replace(/-?\d+|plus|minus|multiplied|divided/g, '').trim();
  if (cleaned) throw new Error('Unknown operation');

  if (!/^-?\d+$/.test(tokens[0])) throw new Error('Syntax error');

  let result = parseInt(tokens[0]);
  let i = 1;

  while (i < tokens.length) {
    const op = tokens[i];
    const num = tokens[i + 1];
    
    if (!['plus','minus','multiplied','divided'].includes(op)) throw new Error('Syntax error');
    if (num === undefined || !/^-?\d+$/.test(num)) throw new Error('Syntax error');
    
    const n = parseInt(num);
    if (op === 'plus')       result += n;
    if (op === 'minus')      result -= n;
    if (op === 'multiplied') result *= n;
    if (op === 'divided')    result /= n;
    
    i += 2;
  }
  
  return result;
};
