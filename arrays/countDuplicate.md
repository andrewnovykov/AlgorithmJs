##Count Duplicate Elements

Problem Description / Problem Statement:

You are given an array of integers, and your task is to write a JavaScript function called `countDuplicate` that counts the number of duplicate elements in the array.

Function Signature:

```javascript
function countDuplicate(arr) {
	// Your code here
}
```

Input:

-   The input `arr` is an array of integers. The array may contain positive and/or negative numbers, as well as zero.

Output:

-   Your function should return an integer representing the count of duplicate elements in the array.

Example:

```javascript
console.log(countDuplicate([1, 3, 1, 4, 5, 6, 3, 2])); // Output: 2
console.log(countDuplicate([8, 1, 3, 1, 4, 5, 6, 3, 2])); // Output: 2
console.log(countDuplicate([1, 1, 2, 2, 2, 3])); // Output: 2
```

In the first example, the array contains two duplicate elements: 1 and 3.

In the second example, the array also contains two duplicate elements: 1 and 3.

In the third example, the array contains two duplicate elements: 1 and 2.

Note:

-   The input array may have duplicates of any integer values, and your function should count each duplicate only once. For example, in the array `[1, 1, 1, 1]`, the count of duplicates is 1, not 4.
