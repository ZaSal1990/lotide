// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  let foundWaldo = names.forEach(element => {
    if (element === 'Waldo')
      found(names.indexOf(element)); }); //passing index of Waldo as arguement
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {console.log("Found Waldo at " + index);
}); // inline anonymous fns