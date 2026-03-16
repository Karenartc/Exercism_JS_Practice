//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (firstStrand, secondStrand) => {
  if(firstStrand.length === secondStrand.length){
    let accum = 0;
    for(let i = 0; i < firstStrand.length; i++){
      if(firstStrand[i] !==  secondStrand[i]) accum++;
    }
    return accum;
  }else{
    throw new Error('strands must be of equal length');
  }
};
