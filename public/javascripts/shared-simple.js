// shared-simple.js

var count=0;
onconnect = function(e) {
  count++;
  var port = e.ports[0];
  port.postMessage('Established connection: ' + count);

  var randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  // var randomColor = '#fff'
  
  port.postMessage(randomColor);
}

