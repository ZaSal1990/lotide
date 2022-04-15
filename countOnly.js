const countOnly = function(allItems, itemsToCount) {
  let countedNames = {};
  for (let items of allItems) { 
    countedNames[items] = (countedNames[items] || 0) + 1;
  } let newObject = itemsToCount; 
  for (const item in newObject) {
    if (newObject[item] === false) { 
      delete newObject[item];
    } else if (newObject[item] === true) {
      newObject[item] = countedNames[item]; 
    }
  }
  return newObject;
}; 
module.exports = countOnly;