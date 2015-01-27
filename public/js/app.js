require('p5');

var graph = window.graph = require('./components/graph').create({
  width:  window.innerWidth
, height: window.innerHeight
});

window.setup = function(){
  createCanvas( graph.width, graph.height );
  graph.random();
};

window.draw = function(){
  graph.update( frameCount );
};