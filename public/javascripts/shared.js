// shared.js

var connections = new Array();  
connections.length = 0;

self.addEventListener("connect", function (e) {  
    var port = e.ports[0];
    port.addEventListener("message", function (e) {  
    	
      var data = e.data;

      if (!data['id']) {
        port.postMessage({value: "Please identify yourself."});
      } else {

        switch (data['cmd']) {

          case 'connect':
            if (!(data['id'] in connections)) {
              connections[data['id']] = null;
              connections.length++;
              port.postMessage({value: data['id'] + " has connected on port #" + connections.length + "."});
            }		
            port.postMessage({value: "Received cmd of '" + data['cmd'] + "' from " + data['id'] + "."});
            if (connections.length == 1) {
              port.postMessage({value: "Starting calculation of Pi."});
              CalculatePi(10000, port);
            }
            break;
        }
      }
    }, false);  
    port.start();  
}, false);

function CalculatePi(loop, port){
    var c = parseInt(loop);
    var f = parseFloat(loop);
    var n=1;
		
    for (var i=0,j=0,Pi=0;i<=c;i++) {
      Pi=Pi+(4/n)-(4/(n+2));
      n=n+4;
      if (++j == 1000) {
        port.postMessage({type: 'data', PiValue: Pi});
        j=0;
      }
    }
    port.postMessage({type: 'data', FinalPiValue: Pi});
}