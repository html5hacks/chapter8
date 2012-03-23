var computations = {
    
  create2Darray: function (data) {
      
    var r = data.rowValue;
	var c = data.colValue;

	var a = new Array(r);
	
	for (var i = 0; i < r; i++) {
	    a[i] = new Array(c);
	
	    for (var j = 0; j < c; j++) {
	        a[i][j] = "[" + i + "," + j + "]";
			self.postMessage(a);
			// return a;
			// window.setTimeout(function() {worker.postMessage(JSON.stringify(message));}, 10);
	    }
	}
    
    // return a;
  }
};

self.addEventListener('message', function(e) {

    var message = JSON.parse(e.data)
    computations[message.compfn](message);
    // computated = computations[message.compfn](message);

    // self.postMessage(computated);
  
}, false);