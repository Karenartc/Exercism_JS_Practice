//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  let accumA = 0;
  let accumC = 0;
  let accumG = 0;
  let accumT = 0;
  
  for (const caracter of strand) {
    switch(caracter){
      case 'A':
        accumA++;
        break;
      case 'C':
        accumC++;
        break;
      case 'G':
        accumG++;
        break;
      case 'T':
        accumT++;
        break;
      default:
        throw new Error('Invalid nucleotide in strand');
    }
  }

  return `${accumA} ${accumC} ${accumG} ${accumT}`;
}
