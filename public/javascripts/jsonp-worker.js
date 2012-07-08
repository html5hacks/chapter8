
// function reqHandler(o) {
// 	postMessage(o);
// } 
// importScripts("http://search.twitter.com/search.json?q=html5&rpp=100&since_id=1&callback=reqHandler");


var callback = function (obj) {
    if (obj.hasOwnProperty("results")) {
        // queue = obj.results;
        // postMessage(queue);
        postMessage(obj);

    } else {
        postMessage("No results.");
    }
};

importScripts("http://search.twitter.com/search.json?q=html5&rpp=100&since_id=1&callback=callback");