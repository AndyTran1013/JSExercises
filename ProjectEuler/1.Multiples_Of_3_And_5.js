/*****

If we list all the natural numbers below 10 that are multiples of 3 or 5
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

Methodology: Sum multiples of 3 and 5 and subtract multiples of 15 (LCD)
=(3 + 6 + 9 + ... + 999) + (5 + 10 + 15 + ... + 995) - (15 + 30 + ... + 990)
= 3(1 + 2 + 3 + ... + 333) + 5( 1 + 2 + 3 + ... + 199) - 15(1 + 2 + ... + 66)

*****/

function oneToN(n){
	return 0.5 * n * (n + 1);
}

function maxDivisible(n, divisor){
	return Math.floor(n / divisor);
}

console.log(3 * oneToN(maxDivisible(999,3)) + 
					  5 * oneToN(maxDivisible(999,5)) -
					  15 * oneToN(maxDivisible(999,15))
					  );


/********Alternate Version*********/
(function sum(n){
	var total = 0;
	for(let i = 1; i <=n;i++){
		if ((i % 3 == 0) || (i % 5 == 0)){
			total += i
		};
	};
	console.log(total);
	return total;
})(1000);

