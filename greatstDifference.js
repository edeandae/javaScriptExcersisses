/*Write a function that takes an array of numbers and 
returns the greatest difference you can get by subtracting 
anytwo of those numbers.
*/
var numbers = [4,64,45,34,12,9, 45, 67, 94];

function maxDifference(numbers){
	var smallest = numbers[0];
	var greatest = numbers[0];

	for(var i = 0; i <= numbers.length; i++){
		if(numbers[i]<smallest){
			smallest = numbers[i];
		}
		else if(numbers[i]>greatest){
			greatest = numbers[i];
		}
	}

	console.log(greatest-smallest)
};

maxDifference(numbers);
