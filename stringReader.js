var theString="Give ([{{}}[({}{})]])()me a [()]{}{[()()]()} yes St[(]) ringbut wi[()]{}{[()()]()}th parentesis ans stuff"

/*
{{{[]{[()]} no
[[[[]]])] no
()()()[)(]) no
([{{}}[({}{})]])() yes
[()]{}{[()()]()} yes
[(]) no
[()]{}{[()()]()} yes
*/

console.log(theString)
var stringArray=theString.split("");//divide string in an array with each of the individual characters
console.log(stringArray)

var smallArrayLeft= []
var smallArrayRight= []

console.log(smallArrayLeft.length)
console.log(smallArrayRight.length)

var arrayLeftSize=0
var arrayRightSize=0

for(var i=0; i<stringArray.length; i++){ //pushing opening braces to left array
	if(stringArray[i]==="(" || stringArray[i]==="[" || stringArray[i]==="{" ){
		smallArrayLeft.push(stringArray[i])
		arrayLeftSize++
	}
	//poping previous brace if current character was closing it
	else if (stringArray[i]===")" && smallArrayLeft[arrayLeftSize-1]==="(" ){
		smallArrayLeft.pop()
		arrayLeftSize--
	}
	else if (stringArray[i]==="]" && smallArrayLeft[arrayLeftSize-1]==="[" ){
		smallArrayLeft.pop()
		arrayLeftSize--
	}
	else if (stringArray[i]==="}" && smallArrayLeft[arrayLeftSize-1]==="{" ){
		smallArrayLeft.pop()
		arrayLeftSize--
	}

	
	//pushing noninmediate closing braces to right array
	else if (stringArray[i]===")" || stringArray[i]==="]" || stringArray[i]==="}" ){
		smallArrayRight.push(stringArray[i])
		arrayRightSize++
	}
	
}


//checking if non inmediate braces are in correct position
console.log(arrayLeftSize)
console.log(arrayRightSize)

console.log(smallArrayLeft)
console.log(smallArrayRight)

if(arrayLeftSize!==0||arrayRightSize!==0){
	console.log("that string contains incorrect brackets")
}
else console.log("those brackets are correctly placed")