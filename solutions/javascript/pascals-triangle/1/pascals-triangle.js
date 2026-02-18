//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rows) => {
  if(rows === 0) return [];

  let currentRow = [1];
  let nextRow = [];
  let pascalsTriangle = [];

  for(let i = 0; i < rows; i ++){
    let zeroCurrRow = [0, ...currentRow, 0];

    for(let j = 0; j < zeroCurrRow.length - 1; j++){
      nextRow.push(zeroCurrRow[j] + zeroCurrRow[j + 1]);
    }

    pascalsTriangle.push(currentRow);
    currentRow = nextRow;
    nextRow = [];
  }

  return pascalsTriangle;
};
