// 1
// const { calculateCartPrice } = require("./calculateCartPrice");

// test("calculating total values", () => {
//   expect(calculateCartPrice([1, 1, 2, 3])).toBe(7);
// });

// 2
// const calculateCartPrice = () => 7;
// module.exports = { calculateCartPrice };

// 3
// test("calculating total values", () => {
//   expect(calculateCartPrice([1, 1, 2, 3])).toBe(7);
//   expect(calculateCartPrice([3, 5, 8])).toBe(16); // New
//   expect(calculateCartPrice([13, 21])).toBe(34); // New
// });

// 4 
// const calculateCartPrice = (prices) => {
//   let total = 0;
//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i];
//   }
//   return total;
// };

// module.exports = { calculateCartPrice };


// 5
// const calculateCartPrice = prices => {
//   return prices.reduce((sum, price) => sum + price, 0);
// };

// module.exports = { calculateCartPrice };

// 6 
// test("applying a discount", () => {
//   expect(calculateCartPrice([1, 2, 3], 50)).toBe(3);
// });

// 7
// const calculateCartPrice = (prices, discountPercentage) => {
//   const total = prices.reduce((sum, price) => sum + price, 0);
//   // Bare minimum logic
//   return discountPercentage ? 3 : total;
// };

// module.exports = { calculateCartPrice };

// 8
// test("applying a discount", () => {
//   expect(calculateCartPrice([1, 2, 3], 50)).toBe(3);
//   expect(calculateCartPrice([100], 20)).toBe(80);
// });

// 9
// const calculateCartPrice = (prices, discountPercentage) => {
//   const total = prices.reduce((sum, price) => sum + price, 0);
  
//   return discountPercentage
//     ? ((100 - discountPercentage) / 100) * total
//     : total;
// };

// module.exports = { calculateCartPrice };

// 10
// test("handling strings", () => {
//   expect(calculateCartPrice([10], "string")).toBe(10); 
// });

// 11
// const calculateCartPrice = (prices, discountPercentage) => {
//   const total = prices.reduce((sum, price) => sum + price, 0);
  
//   return typeof discountPercentage === "number"
//     ? ((100 - discountPercentage) / 100) * total
//     : total;
// };

// module.exports = { calculateCartPrice };