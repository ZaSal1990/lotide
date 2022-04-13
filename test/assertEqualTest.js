
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for [1, 1] - [actual, expected]", () => {
    assert.strictEqual(assertEqual(1,1), true);
  });
 
});