/*****

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

****/

function isPrime(n){
	var rootN = Math.floor(Math.sqrt(n));

	if ((n!== 2) && (n % 2 == 0)) {
		return false;
	}else if (rootN <= 2){
		return true;
	}else {

		for(let i = 3; i <= rootN; i++){
			if (n % i == 0){
				return false;
			};
		};

		return true;
	};
};

function largestPrimeFactor(n){
	var rootN = Math.floor(Math.sqrt(n));

	for(let i = rootN; i > 0; i--){
		if((i % 2 !== 0) && (n % i == 0) && isPrime(i)){
			return i;
		};
	};
};
console.log(largestPrimeFactor(600851475143));


/*****Simpler Solution (from looking at other answers) *****

Keep dividing a number by 2 and the next prime number is the largest prime.

*/

(function(n){
	var factor = 2;
	var result = 0;
	while(n !== 1){
		if (n % factor == 0){
			n /= factor;
			result = factor;
		} else {
			factor += 1
		};
	};
	console.log(result);
}(100));