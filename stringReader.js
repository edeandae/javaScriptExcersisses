var theString="Give[]{}[{}] me a String but with parentesis ans stuff"

console.log(theString)
var stringArray=theString.split("");//divide string in an array with each of the individual characters
console.log(stringArray)

var smallArrayLeft= []
var smallArrayRight= []

console.log(smallArrayLeft.length)
console.log(smallArrayRight.length)

for(var i=0; i<stringArray.length; i++){ //saving braces to left or right array
	if(stringArray[i]==="(" || stringArray[i]==="[" || stringArray[i]==="{" ){
		smallArrayLeft.push(stringArray[i])
	}
	else if (stringArray[i]===")" || stringArray[i]==="]" || stringArray[i]==="}" ){
		smallArrayRight.push(stringArray[i])
	}
}

console.log(smallArrayLeft)
console.log(smallArrayRight)