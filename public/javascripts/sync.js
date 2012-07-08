	
	// This file will be loaded with new Worker(), so it runs as an independent
	// thread and can safely use the synchronous XMLHttpRequest API.
	// Messages are expected to be arrays of URLs. 
	// Synchronously fetch the contents of each URL as a string
	// send back an array of those strings.

	onmessage = function(e) {
		var urls = e.data; // Our input: the URLs to fetch
		var contents = []; // Our output: the contents of those URLs

		for(var i = 0; i < urls.length; i++) {
			var url = urls[i];
			postMessage("url: " + url);
			var xhr = new XMLHttpRequest(); 
			xhr.open("GET", url, false);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send();

			// We want to Separation of 6 graph
			// First call is to our own datastore
			// To recieve twitter usernames, counts, and friends
			// Then on success, we would like to JSONP twitter for a friends list
			// We will then update our 
			// We need to be syncrounous, because before

			if (xhr.status === 200) {  
			  importScripts('https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=twitterapi&count=2')			
			  postMessage(xhr.responseText); 
			}

			//contents.push(xhr.responseText);

		// Finally, send the array of URL contents back to the main thread
		//postMessage(contents); 

		}
	}