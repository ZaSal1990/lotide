const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


describe("#findKeyByValue", () => {
  it("returns key by value for given object", () => {

    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"),'drama');
  });
 
});