//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
     return (this.number * (this.number + 1) * (2 * this.number + 1)) / 6;
  }

  get squareOfSum() {
    const sum = (this.number * (this.number + 1)) / 2;
    return sum ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
