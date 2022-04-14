const map = require('../map');
const assert = require('chai').assert;



describe("#map", () => {
  it("returns ['GROUND','CONTROL'] for [ground, control]", () => {
    assert.deepEqual(map(["ground", "control"], (word) => {
      return word.toUpperCase();
    }), ['GROUND','CONTROL']);
  });
});
