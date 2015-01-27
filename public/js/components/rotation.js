module.exports = require('stampit')()
  .state({
    period: 20
  , rotationWidth: 10
  , rotationHeight: 5
  })
  .methods({
    applyRotation: function( frameCount ){
      this.x = ( Math.sin( frameCount / this.period ) * this.rotationWidth ) + this.x;
      this.y = ( Math.cos( frameCount / this.period ) * this.rotationHeight ) + this.y;
      return this;
    }
  });