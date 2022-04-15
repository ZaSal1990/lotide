const without = function(sourceArray, itemsToRemove) {
  const filteredItems = sourceArray.filter(item => !itemsToRemove.includes(item));
  return filteredItems;
};
module.exports = without;