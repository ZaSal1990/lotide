const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const headArray = function(array) {
  return array[0];
};

//console.log(headArray([]));

assertEqual(headArray([5,6,7]), 5);
assertEqual(headArray(["Hello", "Lighthouse", "Labs"]), "Hello");
