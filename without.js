


const without = function (sourceArray, itemsToRemove) {
  for (let loopOne = 0; loopOne < itemsToRemove.length; loopOne++) { //2
    for (let loopTwo = 0; loopTwo < sourceArray.length; loopTwo++) { //3
      if (sourceArray[loopTwo] === itemsToRemove[loopOne])
      {
        sourceArray.splice(loopTwo,1);
      };
    }
  }
return sourceArray;
};





module.exports = without;