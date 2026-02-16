//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const  DISCOUNTS = {
  1: 0,
  2: 5,
  3: 10,
  4: 20,
  5: 25,
}

const PRICE_CENTS = 800;

export const cost = (books) => {
  if (books.length === 0) return 0;
  
  const counts = books.reduce((acc, book) => {
    acc[book] = (acc[book] || 0) + 1;
    return acc;
  }, {});

  const setSizes = [];

  while(true) {
    let size = 0

    for(let key of Object.keys(counts)){
      if(counts[key] > 0){
        counts[key] -= 1;
        size += 1;
      }
    }

    if (size === 0) break;
    setSizes.push(size);
  }

  while(setSizes.includes(5) && setSizes.includes(3)){
    setSizes.splice(setSizes.indexOf(5), 1);
    setSizes.splice(setSizes.indexOf(3), 1);
    setSizes.push(4, 4);
  }

  let total = 0;

  for(let size of setSizes){
    const discount = DISCOUNTS[size];
    const setPrice = size * PRICE_CENTS;
    total += Math.round(setPrice * (100 - discount) / 100);
  }

  return total;
};
