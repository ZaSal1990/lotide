const eqArrays = function(arrayOne, arrayTwo) {
  let result;
  if (arrayOne.length === arrayTwo.length) {
    for (let index = 0; index < arrayOne.length; index++) {
      if (arrayOne[index] !== arrayTwo[index])  {
        result = false; break;
      } else if (arrayOne[index] === arrayTwo[index])
        result = true;
    }
  } else if (arrayOne.length !== arrayTwo.length) {
    result = false;
  } return result;
};
module.exports = eqArrays;
