const eqArrays = require('../eqArray');
const assert = require('chai').assert;


describe("#eqArrays", () => {
  it("returns true for [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3],false));
  });
 
});