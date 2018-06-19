const assert = require('assert');
const Card = require('../models/card.js');
const Player = require('../models/player.js');

describe('Player', function (){
  let player;

  beforeEach(function(){
    player = new Player('Hannah', hand[0]);
  })
  it('should have a name', function(){
    const actualValue = player.name;
      assert.strictEqual(actualValue, 'Hannah');
  })
//   it('should have a card');
//   const actualValue = player.handCount;
//   assert.strictEqual(actualValue, 0);
 });
