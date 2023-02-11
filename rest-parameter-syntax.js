/**
 * To run this file in Gitpod, use the
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
console.log("Sum is: ", sumAll(1, 2, 3));

// Extra arguments are ignored
console.log("Sum is: ", sumAll(1, 2, 3, 4, 5, 6));
// Sum is still 6 because the extra args are ignored

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
  // '...rest' allows aargs. Doesn't have to be called rest strictly.
  let sum = a + b + c; // <-- add a, b and c like normal
  for (let i of rest) {
    // loop thru whatever is given for the 'rest array'
    sum += i; // <-- add these to the sum var
  }

  return sum;
};

console.log(sumRest(1, 2, 3, 4, 5, 6));
// output as expected
