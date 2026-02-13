//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.matrix = string.split('\n');
  }

  get rows() {
    return this.matrix.map(fila => fila.split(' ').map(valor => +(valor))
)
  }

  get columns() {
    const rows = this.rows;
    let result = [];
    
    for (let i = 0; i < rows[0].length; i++){
      let nuevaColumna = [];
      for (let j = 0; j < rows.length; j++){
        nuevaColumna.push(rows[j][i]);
      }
      result.push(nuevaColumna);
    }
    return result;
  }
}
