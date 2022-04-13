
const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    assert.deepEqual(countLetters('LHL'), { L: 2, H: 1 });
  });
 
});