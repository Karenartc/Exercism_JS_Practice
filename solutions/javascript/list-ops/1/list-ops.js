//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(initialValues = []) {
    this.values = initialValues;
  }

  append(list2) {
    let appendList = [...this.values, ...list2.values];
    return new List(appendList);
  }

  concat(lists) {
    let listOfList = [];
    
    for(let i = 0; i < this.values.length; i++){
      listOfList[listOfList.length] = this.values[i];
    }

    for(let i = 0; i < lists.values.length; i++){
      let innerList = lists.values[i];

      for(let j = 0; j < innerList.values.length; j++){
        listOfList[listOfList.length] = innerList.values[j];
      }
    }
    
    return new List(listOfList);
  }

  filter(fn) {
    let resultList = [];
    
    for(let i = 0; i < this.values.length; i++){
      let el = this.values[i];
      
      if(fn(el)){
        resultList[resultList.length] = this.values[i];
      }
    }
    
    return new List(resultList);
  }

  map(fn) {
    let resultList = [];
    
    for(let i = 0; i < this.values.length; i++){
      resultList[i] = fn(this.values[i]);
    }
    
    return new List(resultList);
  }

  length() {
    return this.values.length;
  }

  foldl(fn, acc) {
    let accum = acc;
    
    for(let i = 0; i < this.values.length; i++){
      accum = fn(accum, this.values[i]);
    }
    
    return accum;
  }

  foldr(fn, acc) {
    let accum = acc;
    
    for(let i = this.values.length -1; i >= 0; i--){
      accum = fn(accum, this.values[i]);
    }
    
    return accum;
  }

  reverse() {
    let resultList = [];
    let j = 0;
    for(let i = this.values.length -1; i >= 0; i--){
      resultList[j] = this.values[i];
      j++;
    }

    return new List(resultList);
  }
}
