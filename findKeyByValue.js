const findKeyByValue = function(object, value) {
  let result;
  for (let values in object)  {
    if (object[values] === value)
      result = values; // returning key to result if the value matches
  }
  return result;
};
module.exports = findKeyByValue;