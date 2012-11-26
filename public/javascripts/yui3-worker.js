

importScripts("http://yui.yahooapis.com/3.5.1/build/yui/yui-min.js");

onmessage = function(e) {
	
	YUI(e.data).use('worker-module', function (Y) {
	    

		postMessage(e.data); 

	});	

};

