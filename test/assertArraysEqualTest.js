const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("Passes/Fails assertion by comparing inputs", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), 'Assertion Passed');
  });
 
});
