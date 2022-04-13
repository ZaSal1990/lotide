//prgm to flatten arrays

const flatten = function(sourceArray) {
  let targetArray = [];
  for (let item of sourceArray) {
    let arrayCheck = Array.isArray(item);
    if (arrayCheck === true)  {
      for (let nestedItem of item) {
        targetArray.push(nestedItem);
      }
    } else if (arrayCheck === false) {
      targetArray.push(item);
    }
  } return targetArray;
};






module.exports = flatten;