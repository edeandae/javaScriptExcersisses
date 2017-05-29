"hello" //to write hello in the command line
"cat".length //finding the lenght of the string cat

confirm("I am awesome"); //asking the user to ok or cancel whether or not I am awesome

prompt("what is your name?"); //asking an answer from the user, a pop box to write something will appear

"I'm coding like a champ".length >10 //to make a boolean comparizon like whener a string length is greater than a number do like this--- 

//console print out
console.log(2*5) //this prints 10
console.log("Hello") //this prints Hello

/*comparizon operators

> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to
*/
console.log(8*2 === 16); //this prints true

//if statements
if (99>5 ) {
    console.log("yep 99 is greater than 5" );//this prints yep 99 is greater than 5
}

//else statements

if ( "Eric".length>7) 
{
    console.log("Let's go down the first road!");
}
else 
{
    console.log("eric is a short name");
    // What should we do if the condition is false? Fill in here:
    
}

//modulus
console.log(14%3); //prints 2 divides 14 by 3
//if( 14%2===0 ) //in an if statement

//substrings
//From 4th to 6th letter of "laptop" "laptop".substring(3,6);
//printing burguer
console.log("Hamburgers".substring(3,"Hamburgers".length));
//saving a variable var
 myAge=33;
 var myCountry=("Mexico wey");
 console.log(myCountry.length);//printing the variable
 console.log(myCountry.substring(0,3));//printing a substring of the first three letters of my myCountry

 // On line 2, declare a variable myName and give it your name.
var myName="Eric"
// On line 4, use console.log to print out the myName variable.
console.log(myName)
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName=myName.substring(0,2)
// On line 9, use console.log to print out the myName variable.
console.log(myName)


 /*//example on traversing dictionaries
var brothers = {
  "juan":30,
  "nora":28,
  "yael":42
};
//brothers.push(eric,22)//pushing like this is wrong for dictionary
brothers["eric"]=22;//correct
for(var index in brothers){
  console.log(brothers[index])
}
*/