/**
 * Edge
 */

module.exports = require('stampit')()
  .compose( require('./fill-and-stroke') )
  .state({
    a: null
  , b: null

    // 0 = a->b, 1 = b->a
  , direction: 0

  , stroke: [ 200, 200, 200 ]

  , weight: 1
  })
  .methods({
    update: function( frameCount ){
      this.applyFill();
      this.applyStroke();

      line( this.a.x, this.a.y, this.b.x, this.b.y );

      return this;
    }
  });