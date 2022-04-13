

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countedNames = {};
  for (let items of allItems) { //Array needs for...of
    countedNames[items] = (countedNames[items] || 0) + 1;
}
  

  let newObject = itemsToCount; // copying item to another object to ensure originals tays intact
  for (const item in newObject) {
    if (newObject[item] === false) { //value of key(name)
      delete newObject[item];
    } else if (newObject[item] === true) {
      newObject[item] = countedNames[item]; //replacing the value with the value of same key in countedNames object
    }
  }
  return newObject;
};
  

module.exports = countOnly;