//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  if (number % 100 === 11 ||  number % 100 === 12 || number % 100 === 13){
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  } else if (number % 10 === 1 && number !== 11){
      return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  } else if (number % 10 === 2 && number !== 12){
      return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  }else if (number % 10 === 3 && number !== 13){
      return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  } else {
      return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  }
};