

const middle = function(sourceArray) {
  let newArray = [];
  let indexMiddleItemEven = sourceArray.length / 2;
  let indexMiddleItemOdd = Math.ceil((sourceArray.length - 1) / 2);

  if (sourceArray.length > 2 && sourceArray.length % 2 === 0)  {
    newArray.push(sourceArray[indexMiddleItemEven - 1],sourceArray[indexMiddleItemEven]);
  } else if (sourceArray.length > 2 && sourceArray.length % 2 === 1)  {
    newArray.push(sourceArray[indexMiddleItemOdd]);
  }
  return newArray;
};

module.exports = middle;