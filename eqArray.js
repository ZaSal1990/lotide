
//prgm to comapre one array items to the counter parts 

const eqArrays = function(arrayOne, arrayTwo) {
  let result;
  if (arrayOne.length === arrayTwo.length) {
    for (let index = 0; index < arrayOne.length; index++) {
      if (arrayOne[index] !== arrayTwo[index])  {
        result = false; break;
      } else if (arrayOne[index] === arrayTwo[index])
        result = true;
    }
  }
  return result;
};
console.log(eqArrays([1, 2, 3], [1, 1, 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false