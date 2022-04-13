const findKey = require('../findKey');
const assert = require('chai').assert;


describe("#findKey", () => {
  it("returns key for the value specified on in-lione call back", () => {
    assert.deepEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),"noma");
  });
 
});