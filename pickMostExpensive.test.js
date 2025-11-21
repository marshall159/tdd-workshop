// 1. This time, I am confident. I'm going to define the entire behavior of the function upfront. 
// I'm writing all my expectations before I write a single line of production code

// const { pickMostExpensive } = require("./pickMostExpensive");

// test("picking the most expensive cart", () => {
//   // We test multiple scenarios in one go
//   expect(pickMostExpensive([[3, 2, 1, 4], [5], [50]]))
//     .toEqual([50]); // 50 is bigger than 10 or 5
//   expect(pickMostExpensive([[2, 8, 9], [0], [20]]))
//     .toEqual([20]);
//   expect(pickMostExpensive([[0], [0], [0]]))
//     .toEqual([0]);
//   expect(pickMostExpensive([[], [5], []]))
//     .toEqual([5]);
// });

// test("null for an empty cart array", () => {
//   expect(pickMostExpensive([])).toEqual(null);
// });


// 2. The tests fail because the module doesn't exist. This is our Red state. 

// const { calculateCartPrice } = require("./calculateCartPrice");

// const pickMostExpensive = (carts) => {
//   if (carts.length === 0) return null;

//   let mostExpensivePrice = 0;
//   let mostExpensiveCart = null;

//   for (let i = 0; i < carts.length; i++) {
//     const currentCart = carts[i];
//     // Reusing our trusted code from the previous exercise
//     const currentCartPrice = calculateCartPrice(currentCart);
    
//     if (currentCartPrice >= mostExpensivePrice) {
//       mostExpensivePrice = currentCartPrice;
//       mostExpensiveCart = currentCart;
//     }
//   }

//   return mostExpensiveCart;
// };

// module.exports = { pickMostExpensive };