
	function process() {
		console.log("WITHOUT WORKER")
        
        var r = $('select#row').val();
	    var c = $('select#col').val();
    
        // console.log(r);
	    var a = new Array(r);

	    for (var i = 0; i < r; i++) {
	        a[i] = new Array(c);

	        for (var j = 0; j < c; j++) {
	            a[i][j] = "[" + i + "," + j + "]";
	        }
	    }
        $('#textarea').text(a.toString());
	};

	function processWorker() {
		console.log("WORKER")
        var r = $('select#row').val();
	    var c = $('select#col').val();
        
        var worker = new Worker('assets/js/demojs/twoDarray-worker.js');
        var message = {
			"compfn": "create2Darray",
            "rowValue": r,
            "colValue": c
		  }
                      
        worker.postMessage(JSON.stringify(message)); 
        worker.onmessage = function (event) {
     	    // print results of array in result div
            var data = event.data 
            // Must stringify before appending to DOM
			console.log('data has returned as: ' + typeof data + ' ...time to stringify and append to DOM')
            $('#textarea').text(JSON.stringify(data));
   	    };
	};

function init() {
    $('#worker').click(function() {
        processWorker();
    });

    $('#non-worker').click(function() {
        process();
    });
}

window.onload = init;