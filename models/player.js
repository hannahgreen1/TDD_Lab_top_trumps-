
const Player = function(hand){
  // this.name = name;
  this.hand = [];

}

Player.prototype.handCount = function () {
  this.hand.length();
};

module.exports = Player;
