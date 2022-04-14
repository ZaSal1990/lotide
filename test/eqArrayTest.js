const eqArrays = require('../eqArray');
const assert = require('chai').assert;


describe("#eqArrays", () => {
  it("returns true for same input", () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 3]),true);
  });
 
});