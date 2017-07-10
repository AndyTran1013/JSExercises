/***
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21

 ***/
 
 function solution(roman){
// Symbol  I  V  X    L    C    D    M
// Value  1  5  10  50  100  500  1,000
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let num = 0;
  
  if (roman.length == 1) {
    return map[roman];
  } else {
    //need to compare the current number to the one after it to see if subtractation is needed
    for(let i = 0; i < roman.length; i++){
      
      let n1 = map[roman[i]];
      let n2 = (i === roman.length - 1 ? 0 : map[roman[i+1]]);
      
      if (n1 >= n2){
        num += n1;
      } else {
        num += (n2 - n1);
        i++
      }
    }
    return num;
  }
}