
/*Given a string return the longest palindrome that can be constructed by removing or shuffling characters. 
Example: 
'aha' -> 'aha' 
'ttaatta' -> ' ttaaatt' 
'abc' -> 'a' or 'b' or 'c' 
'gggaaa' -> 'gaaag' or 'aggga' 
Note if there are multiple correct answers you only need to return 1 palindrome.
*/

var word = "aabczRc";
var wordDict = {};
var leftPalindrome = [];
var rigthPalindrome = [];
var palindrome;

function dictionaryCreator(word){
  for(var index in word){
    var letter = word[index];
    if(wordDict[letter]){
      wordDict[letter]++;
    }
    else{
      wordDict[letter] = 1;
    }
  }
};

function palindromeConstructor (wordDict){
	for(var index in wordDict) {
		for(var i=wordDict[index]; i>1;i-=2){
			wordDict[index] = wordDict[index]-2;
			leftPalindrome.push(index);
		}
	}
	var k=0;
	for(var i=leftPalindrome.length-1; i>=0;i--){
		rigthPalindrome[i]=leftPalindrome[k];
		k++;
	}

	for(var index in wordDict){
		if(wordDict[index]===1){
			leftPalindrome.push(index);
			break;
		}
	}

	for(var index in rigthPalindrome){
		leftPalindrome.push(rigthPalindrome[index]);
	}
	palindrome = leftPalindrome.join(',');
	console.log(palindrome);
};

//tests
dictionaryCreator(word);
console.log(wordDict);
palindromeConstructor(wordDict);
console.log(wordDict);
console.log(palindrome);
console.log(rigthPalindrome);
