// prgm to log on the 0th item of the array

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  return array[0];
};

//console.log(headArray([]));

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
