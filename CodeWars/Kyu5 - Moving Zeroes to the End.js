/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

Example:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

 */

var moveZeros = function (arr) {
  let newArr = [];
  let numZero = 0;
  
  arr.forEach((e)=>{
    if (e === 0){
      numZero +=1;
    } else {
      newArr.push(e);
    }
  });
  
  return newArr.concat(Array(numZero).fill(0));
 
}

//After seeing solutions, can use Array.filter() to create an Array of 0s and non-0s then concatenate 