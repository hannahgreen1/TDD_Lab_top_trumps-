const assert = require('assert');
const Card = require('../models/card.js');

describe('Card', function (){
  let card;

  beforeEach(function(){
    card = new Card('Superman', 6, 9, 7);
  })
  it('should have a name', function(){
    const actualValue = card.name;
      assert.strictEqual(actualValue, 'Superman');
  })
  it('should have an intelligence', function(){
    const actualValue = card.intelligence;
    assert.strictEqual(actualValue, 6);
  })
  it('should have a strength', function(){
    const actualValue = card.strength;
    assert.strictEqual(actualValue, 9);
  })
  it('should have an agility', function(){
    const actualValue = card.agility;
    assert.strictEqual(actualValue, 7);
  })
})
