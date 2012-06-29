// Import.js


// This file will be loaded with new Worker(), so it runs as an independent // 
// thread and can safely use the synchronous XMLHttpRequest API.
// Messages are expected to be arrays of URLs. Synchronously fetch the
// contents of each URL as a string and send back an array of those strings. 

onmessage = function(e) {
	
	var urls = e.data; // Our input: the URLs to fetch
	
	var contents = []; // Our output: the contents of those URLs
	
	for(var i = 0; i < urls.length; i++) {
	
		var url = urls[i];
	

		// For each URL
		// Begin an HTTP request
		// false makes this synchronous
		// Blocks until response is complete 
		
		var xhr = new XMLHttpRequest(); 
		xhr.open("GET", url, false); 
		xhr.send();
	
			if (xhr.status !== 200)
				throw Error(xhr.status + " " + contents.push(xhr.responseText);

				// Throw an error if request failed xhr.statusText + ": " + url);
				// Otherwise, store the URL contents
			}
	
	// Finally, send the array of URL contents back to the main thread
	postMessage(contents); 
	
};