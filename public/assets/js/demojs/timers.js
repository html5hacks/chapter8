
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
	 			window.setTimeout(function() {$('#textarea').val(a.toString());}, 10);
				// $('#textarea').val(a.toString());
				
	        }
	    }
	
		// window.setTimeout(function() {$('#textarea').val(a.toString());}, 0);
        // $('#textarea').text(a.toString());
	};

	function processWorker() {
		console.log("WORKER");
        var r = $('select#row').val();
	    var c = $('select#col').val();
        
        var worker = new Worker('assets/js/demojs/timers-worker.js');
		var message = {
			"compfn": "create2Darray",
			"rowValue": r,
			"colValue": c
		};
		
		// send batch of 5
		// var message;
		// for (var i = 5; i < r; i++) {
		// 	
		// 	message = {
		// 		"compfn": "create2Darray",
		// 	    "rowValue": r,
		// 	    "colValue": c
		// 	};
		// 	window.setTimeout(function() {worker.postMessage(JSON.stringify(message));}, 10);  
		// }
                  
        worker.postMessage(JSON.stringify(message)); 


        worker.onmessage = function (event) {
     	    // print results of array in result div
            var data = event.data 
            // Must stringify before appending to DOM
			console.log('data has returned as: ' + typeof data + ' ...stringify and append to DOM')
			window.setTimeout(function() {$('#textarea').val(JSON.stringify(data));}, 100);
            //$('#textarea').val(JSON.stringify(data));
   	    };
	};

function init() {
    $('#worker').click(function() {
        processWorker();
    });

    $('#non-worker').click(function() {
        process();
		// $('#textarea').val('test');
    });
}

window.onload = init;