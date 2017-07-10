/*

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.

 */


class numberDigits {
	constructor(numDigits){
		this.upperNum = Math.pow(10,(numDigits)) - 1;
		this.lowerNum = Math.pow(10,(numDigits - 1));
		this.iterations = 0;
	};
	
	//can also reverse the number by repeating mod 10 and dividing instead of str
	isPalindrome(str){ 
		var n = Math.floor(str.length / 2);

		for(let i = 0; i < n; i++){
			if(str[i] !== str[str.length - 1 - i]){ return false}; 
		};

		return true;
	};

	largestPalindrome(){
		var n = 0;
		var pair = [];

		/*
			Using the below matrix, it is quicker to count the bottom triangle first
			[9,6,4,3,2,1] vs [9,6,3,4,2,1]

						  j
					3 	2 	1 
			---------------
			3 |		9		6		3
		i	2 |		6		4		2
			1 |		3		2		1

		*/

		for(let i = this.upperNum; i >= this.lowerNum; i--){
			for(let j = this.upperNum ; j >= i; j--){
				this.iterations +=1
				//since start from the top, i * j will always be smaller than the first palindrome 
				
				if (i * j <= n){break;};

				if(this.isPalindrome('' + i * j)){
					n = i * j;
					pair = [i,j];
				};

			}
		}
		return 'The Largest Palindrome is: ' + pair[0] + ' x ' + pair[1] + ' = ' + n + '.';
  }

};

let x = new numberDigits(1);

console.log('Upper Limit: ' + x.upperNum + 
					'\nLower Limit: ' + x.lowerNum +
					'\nLargestPalindrome: ' + x.largestPalindrome() + 
					'\nIterations: ' + x.iterations);

