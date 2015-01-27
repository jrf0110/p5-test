/**
 * Graph
 */

var nodes = require('./node');
var edges = require('./edge');

module.exports = require('stampit')()
  .state({
    nodes: []
  , edges: []

  , randomConfig: {
      numNodes: 100
    , numEdges: 100
    }
  })
  .methods({
    update: function( frameCount ){
      var i;

      background(255);

      for ( i = this.nodes.length - 1; i >= 0; i-- ){
        this.nodes[ i ].update( frameCount );
      }

      for ( i = this.edges.length - 1; i >= 0; i-- ){
        this.edges[ i ].update( frameCount );
      }

      return this;
    }

  , add: function( node ){
      node = nodes.create( node );
      this.nodes.push( node );
      return node;
    }

  , connect: function( a, b, direction ){
      var edge = edges.create({ a: a, b: b, direction: direction });
      this.edges.push( edge );
      return this;
    }

  , random: function(){
      var curr, prev;

      this.nodes = [];

      for ( var i = 0; i < this.randomConfig.numNodes; i++ ){
        curr = this.add({
          x: parseInt( Math.random() * this.width )
        , y: parseInt( Math.random() * this.height )
        , period: randomGaussian( 100, 15 )
        , rotationHeight: randomGaussian( 5, 5 )
        , rotationWidth: randomGaussian( 5, 5 )
        });

        if ( prev ){
          this.connect( prev, curr, 1 );
        }

        prev = curr;
      }

      return this;
    }
  });