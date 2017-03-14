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