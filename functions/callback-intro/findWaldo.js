// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  let foundWaldo = names.forEach(element => {
    if (element === 'Waldo')
      found(names.indexOf(element)); });
};

const actionWhenFound = function(index) {
  console.log("Found Waldo at " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);