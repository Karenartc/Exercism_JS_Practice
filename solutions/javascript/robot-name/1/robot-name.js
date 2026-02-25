// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const USEDNAMES = new Set();

function randomName(){
  const letter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const letter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const number = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  return `${letter1}${letter2}${number}`;
}

export class Robot {
  constructor(){
    this._name = null;
  }

  get name(){
    if(this._name === null){
      let candidate;
      do{
        candidate = randomName();
      }while(USEDNAMES.has(candidate));

      USEDNAMES.add(candidate);
      this._name = candidate;
    }

    return this._name;
  }

  reset(){
    this._name = null;
  }
}

Robot.releaseNames = () => USEDNAMES.clear();
