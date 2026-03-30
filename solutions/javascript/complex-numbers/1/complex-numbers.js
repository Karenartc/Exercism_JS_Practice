//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(other) {
    return new ComplexNumber(
      this._real + other.real,
      this._imag + other.imag
    );
  }

  sub(other) {
    return new ComplexNumber(
      this._real - other.real,
      this._imag - other.imag
    );
  }

  div(other) {
    const denominator = other.real ** 2 + other.imag ** 2;

    return new ComplexNumber(
      (this._real * other.real + this._imag * other.imag) / denominator,
      (this._imag * other.real - this._real * other.imag) / denominator
    );
  }

  mul(other) {
    return new ComplexNumber(
      this._real * other.real - this._imag * other.imag,
      this._real * other.imag + this._imag * other.real
    );
  }

  get abs() {
    return Math.sqrt(this._real ** 2 + this._imag ** 2);
  }

  get conj() {
    return new ComplexNumber(this._real, this._imag === 0 ? 0 : -this._imag);
  }

  get exp() {
    const ea = Math.exp(this._real);

    return new ComplexNumber(
      ea * Math.cos(this._imag),
      ea * Math.sin(this._imag)
    );
  }
}
