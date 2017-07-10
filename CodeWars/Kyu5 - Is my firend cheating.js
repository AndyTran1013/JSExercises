/*
-A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
-Within that sequence, he chooses two numbers, a and b.
-He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.

Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (don't worry, n is always strictly greater than 0 and small enough so we shouldn't have overflow)  and returns an array of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

Examples:
	removNb(26) should return [(15, 21), (21, 15)]
	removeNb(100) should return []

 */

function removeNb (n) {
  const maxSum = (n * (n + 1 ) / 2); //sum of 1 to N
  const start = Math.ceil(0.5 * (n - 1)); // Don't need to test smaller numbers b/c math
  let pairs = [];
  
  for(let i = start; i <= n; i++){
    let j = Math.floor((maxSum - i) / i);

    if ((maxSum - i - j) === i * j){
      pairs.push([i,j]);
      pairs.push([j,i]);
    }
  }
  return pairs.sort(function(a,b){
    return a[0] - b[0];
  });
}