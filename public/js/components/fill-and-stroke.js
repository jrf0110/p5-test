module.exports = require('stampit')()
  .state({
    fill: [ 255, 255, 255, 1 ]
  , stroke: [ 0, 0, 0 ]
  , weight: 1
  })
  .methods({
    applyFill: function( frameCount ){
      if ( this.fill ){
        fill.apply( null, this.fill );
      } else {
        noFill();
      }

      return this;
    }

  , applyStroke: function( frameCount ){
      if ( this.weight ){
        strokeWeight( this.weight );
      }

      if ( this.stroke ){
        stroke.apply( null, this.stroke );
      } else {
        this.noStroke();
      }

      return this;
    }
  });