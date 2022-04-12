const assertArraysEqual = require('../assertArraysEqual');
//const assert = require('chai').assert;



// describe("Palindromes", function() {
//   it("should return true if a word is a palindrome", function() {
//     const word = "abba";
//     const result = isPalindrome(word);
//     assert.isTrue(true, result);
//   });

assertArraysEqual([1, 2, 3], [1, 1, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);