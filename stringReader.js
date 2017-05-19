var theString="Give[]{{}}[{}([])[]] me a String but with parentesis ans stuff"

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
	else if (stringArray[i]===")" && stringArray[i-1]==="(" ){
		smallArrayLeft.pop(stringArray[i-1])
		arrayLeftSize--
	}
	else if (stringArray[i]==="]" && stringArray[i-1]==="[" ){
		smallArrayLeft.pop(stringArray[i-1])
		arrayLeftSize--
	}
	else if (stringArray[i]==="}" && stringArray[i-1]==="{" ){
		smallArrayLeft.pop(stringArray[i-1])
		arrayLeftSize--
	}
	//pushing noninmediate closing braces to right array
	else if (stringArray[i]===")" || stringArray[i]==="]" || stringArray[i]==="}" ){
		smallArrayRight.push(stringArray[i])
		arrayRightSize++
	}
}

if(arrayLeftSize!==0&&arrayRightSize!==0){//continue if not all closed inmediatly
	console.log("there is still stuff to do")
	//smallArrayRight.reverse()
	for(var i=arrayLeftSize; i>0;i--){

	}
}

//checking if non inmediate braces are in correct position
console.log(arrayLeftSize)
console.log(arrayRightSize)

console.log(smallArrayLeft)
console.log(smallArrayRight)