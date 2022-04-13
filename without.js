

const without = function(sourceArray,itemsToRemove) {
  let newArray = [];
  for (let loopOne = 0; loopOne < sourceArray.length; loopOne++) {
    for (let loopTwo = 0; loopTwo < itemsToRemove.length; loopTwo++) {
      if (sourceArray[loopOne] !== itemsToRemove[loopTwo]) {
        newArray.push(sourceArray[loopOne]);
      }
    }
  }
  return newArray;
};

module.exports = without;