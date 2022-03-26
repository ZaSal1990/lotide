const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const tailArray = function(array) {
  let newArray =  array;
  newArray = newArray.splice(1,newArray.length - 1);
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!
//console.log(tailArray(words)); // no need to capture the return value since we are not checking it