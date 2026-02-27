//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if(key === undefined){
      this._key = Cipher.generateRandomKey();
    } else {
      this._key = key;
    }
  }

  static generateRandomKey(){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i = 0; i < 100; i++){
      result += letters[Math.floor(Math.random( )* 26)];
    }
    return result;
  }

  transform(text, direction){
    const aCode = 'a'.charCodeAt(0);
    let result = '';

    for (let i = 0; i < text.length; i++){
      const textValue = text.charCodeAt(i) - aCode;

      const keyValue =
        this._key.charCodeAt(i % this._key.length) - aCode;

      const shifted =
        (textValue + direction * keyValue + 26) % 26;

      result += String.fromCharCode(shifted + aCode);
    }
    return result;
  }

  encode(plainText) {
    return this.transform(plainText, 1);
  }

  decode(cipherText) {
    return this.transform(cipherText, -1);
  }

  get key() {
    return this._key;
  }
}
