Problem Description / Problem Statement:

You are tasked with writing a JavaScript function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

Your function should take a string as input and return `true` if it is a palindrome, and `false` if it is not.

Function Signature:

```javascript
function isPalindrome(string) {
	// Your code here
}
```

Input:

-   The input `string` is a non-empty string of alphabetic characters, possibly including spaces, punctuation, and capitalization.

Output:

-   Your function should return a boolean value (`true` or `false`) representing whether the input string is a palindrome or not.

Example:

```javascript
console.log(isPalindrome('Racecar')); // Output: true (ignoring case)
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true (ignoring spaces and punctuation)
```

Note:

-   Your function should ignore spaces, punctuation, and capitalization when checking for palindromes.
-   The input string may contain spaces, punctuation marks, and both lowercase and uppercase letters. However, the function should consider the string as a palindrome as long as its characters (ignoring the mentioned factors) read the same forward and backward.
