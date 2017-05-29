/*How many Fibonacci numbers exists less than a given
 number n.Can you find a function in terms of n , 
 to get the number of fibonacci number less than n. 
Example : n = 6 
Answer: 6 as (0, 1, 1, 2, 3, 5)*/

var n = 6;
var count = 0;
var fibonacci=0;
var first = 0;
var second = 1;

while(fibonacci < n){
    first = second;
    second = fibonacci;
    fibonacci=first+second;
    count++;
}

console.log("amount of fibonacci numbers which are less than the number ",n,": ",count);