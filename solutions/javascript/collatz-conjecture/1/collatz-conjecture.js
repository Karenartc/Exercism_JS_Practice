//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if(number < 1) throw new Error('Only positive integers are allowed');

  let steps = 0;

  while(number !== 1){
    if(number % 2 === 0){
      number /= 2;
    }else{
      number *= 3;
      number++;
    }
    steps++;
  }

  return steps;
};
