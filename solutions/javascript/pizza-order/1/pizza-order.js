/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {

  const pricePizza = (pizza === 'Margherita') ? 7 :
                    (pizza === 'Caprese') ? 9 : 10;

  if (extras[0] === undefined) {
    return pricePizza;
  }

  const [first, ...rest] = extras;
  const firstExtra = (first === 'ExtraSauce') ? 1 : 2;
  const restPrice = pizzaPrice(pizza, ...rest);
  
  return firstExtra + restPrice;

}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;

  for(let i = 0; i < pizzaOrders.length; i++){
    let order = pizzaOrders[i];
    let pricePizza = (order.pizza === 'Margherita') ? 7 :
                    (order.pizza === 'Caprese') ? 9 : 10;
    
    totalPrice += pricePizza;

    for (let j = 0; j < order.extras.length; j++){
      let extra = order.extras[j];
      totalPrice += ( extra === 'ExtraSauce') ? 1 : 2;
    }
  }
  
  return totalPrice;
}
