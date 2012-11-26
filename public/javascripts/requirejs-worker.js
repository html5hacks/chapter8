importScripts('http://cdnjs.cloudflare.com/ajax/libs/require.js/1.0.8/require.js');

require({
        baseUrl: "/javascripts/"
    },
    ["req/simple", "req/simple2"],
    function(simple, simple2) {
    	//postMessage(require);
        postMessage(simple.name);
        //postMessage(simple2.name);
    }
);