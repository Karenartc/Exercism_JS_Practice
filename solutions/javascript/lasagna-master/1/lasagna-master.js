/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

//Task 1: Determine wether the lasagna is done
export function cookingStatus(remainingMinutes){
  return (remainingMinutes === 0) ? 'Lasagna is done.' :
          (remainingMinutes === undefined) ? 'You forgot to set the timer.' : 'Not done, please wait.';
}

//Task 2: Estimate the preparation time
export function preparationTime(layers, time){
  return (time === undefined) ? layers.length * 2 : layers.length * time;
}

//Task 3: Compute the amounts of noodles and sauce needed
export function quantities(layers){
  let gramsNoodles = 0;
  let litersSauce = 0;
  layers.forEach((layer, index) => {
    if (layer === 'noodles'){
      gramsNoodles += 50;
    } else if (layer === 'sauce') {
      litersSauce += 0.2;
    }
  })
  return {noodles: gramsNoodles, sauce: litersSauce,};
}

//Task 4: Add the secret ingredient
export function addSecretIngredient(friendList, myList){
  myList.push(friendList[friendList.length -1]);
}

//Task 5: Scale the recipe
export function scaleRecipe(recipe, portions){
  let factor = portions / 2;
  let newRecipe = {};

  for (const ingredient in recipe) {
    newRecipe[ingredient] = recipe[ingredient] * factor;
  }

  return newRecipe;
}
