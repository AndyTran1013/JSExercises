/*****

Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:
		1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 find the sum of the even-valued terms.

*****/

var evenSeq = [];
var limit = 4000000;
var currNum = 1;
var prevNum = 0;

for(let i = currNum; (currNum + prevNum) < limit; i = prevNum){
	prevNum = currNum;
	currNum += i;
	if (currNum % 2 == 0) {evenSeq.push(currNum)};
}

console.log(evenSeq.reduce(function(total,value){
	return total += value;
},0));
