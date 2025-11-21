// 1 The First Failure (Red)
// We start with the test. We want to verify that a cart with items costing 1, 1, 2, and 3 equals 7. Notice I haven't even created the implementation file yet. The test fails immediately. This is Red. It confirms that our test is actually running and that the feature is missing

// const { calculateCartPrice } = require("./calculateCartPrice");

// test("calculating total values", () => {
//   expect(calculateCartPrice([1, 1, 2, 3])).toBe(7);
// });


// 2 The "Silly" Implementation (Green)
// Now we make it Green. The rule is: Write the bare minimum to make the test pass. I know what you're thinking: 'You just hardcoded 7! That's cheating!' But look at what we achieved:
// We confirmed the file exists.
// We confirmed the export works.
// We confirmed the test harness is correct. We have a solid foundation to build on

// const calculateCartPrice = () => 7;
// module.exports = { calculateCartPrice };


// 3 Red -> Green
// Now we break our hardcoded solution. We add more cases. The test fails again (Red). Now, and only now, are we allowed to write the logic

// test("calculating total values", () => {
//   expect(calculateCartPrice([1, 1, 2, 3])).toBe(7);
//   expect(calculateCartPrice([3, 5, 8])).toBe(16); // New
//   expect(calculateCartPrice([13, 21])).toBe(34); // New
// });


// 4 Naive implementation (Green)
// We implement the logic using a simple for loop. We are back to Green

// const calculateCartPrice = (prices) => {
//   let total = 0;
//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i];
//   }
//   return total;
// };

// module.exports = { calculateCartPrice };



// 5 Refactor
// Now that we are Green, we can Refactor. I don't like that for loop. I want to use reduce. Because I have tests, I can change the code without fear
// It still passes. We just improved the design without breaking functionality

// const calculateCartPrice = prices => {
//   return prices.reduce((sum, price) => sum + price, 0);
// };

// module.exports = { calculateCartPrice };


// 6 New Requirement - Discount (Red)
// New requirement: We need to apply a discount. In TDD, we don't just start hacking the function. We write a failing test first

// test("applying a discount", () => {
//   expect(calculateCartPrice([1, 2, 3], 50)).toBe(3);
// });


// 7 Bare Minimum Discount
// I do the bare minimum. I return 3 if a discount exists. It forces us to write another test to prove this logic isn't enough

// const calculateCartPrice = (prices, discountPercentage) => {
//   const total = prices.reduce((sum, price) => sum + price, 0);
//   // Bare minimum logic
//   return discountPercentage ? 3 : total;
// };

// module.exports = { calculateCartPrice };


// 8 Real Logic (Red -> Green)
// Add further test cases 

// test("applying a discount", () => {
//   expect(calculateCartPrice([1, 2, 3], 50)).toBe(3);
//   expect(calculateCartPrice([100], 20)).toBe(80);
// });


// 9 Real logic
// update code to real math

// const calculateCartPrice = (prices, discountPercentage) => {
//   const total = prices.reduce((sum, price) => sum + price, 0);
  
//   return discountPercentage
//     ? ((100 - discountPercentage) / 100) * total
//     : total;
// };

// module.exports = { calculateCartPrice };


// 10 The Edge Case
// We are almost done. But what if someone passes a string as a discount? In the old days, we might push this to production and wait for a user to complain. In TDD, we write a test that proves the bug exists

// test("handling strings", () => {
//   expect(calculateCartPrice([10], "string")).toBe(10); 
// });


// 11 Final Fix
// Perfect. We have proven the bug exists. Now we fix it

// const calculateCartPrice = (prices, discountPercentage) => {
//   const total = prices.reduce((sum, price) => sum + price, 0);
  
//   return typeof discountPercentage === "number"
//     ? ((100 - discountPercentage) / 100) * total
//     : total;
// };

// module.exports = { calculateCartPrice };