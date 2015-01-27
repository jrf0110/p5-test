/**
 * Node
 */

module.exports = require('stampit')()
  .compose( require('./fill-and-stroke') )
  .compose( require('./rotation') )
  .state({
    x:      0
  , y:      0
  , width:  5
  , height: 5
  , fill:   false
  , stroke: [ 100, 100, 100 ]
  })
  .methods({
    update: function( frameCount ){
      this.applyFill( frameCount );
      this.applyStroke( frameCount );
      this.applyRotation( frameCount );

      ellipse( this.x, this.y, this.width, this.height );

      return this;
    }
  });