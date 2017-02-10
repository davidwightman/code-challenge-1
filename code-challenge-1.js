/*CODE CHALLENGE:
 If we list all the natural numbers
 below 10 that are multiples of 3 or 5,
 we get 3, 5, 6 and 9. The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.*/

//MY ANSWER:
//declare a sum variable and set it to 0
var sum = 0
//make a for loop incrimenting through 1000
for (i = 1; i < 1000; i++) { 
	//if the number is divisible by 3 OR 5 then...
	if (i % 3 === 0 || i % 5 === 0) {
		// ...add that number to sum
		sum += i
	} 
};

//print sum to the console
console.log(sum);