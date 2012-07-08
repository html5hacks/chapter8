
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , url = require('url')

var app = module.exports = express.createServer();


// just start with a few random things defined for testing.
var store = {
  "jdcravens": {friends: ["boyofgreen", "test", "test2"] },
  "boyofgreen": {friends: ["jdcravens", "test", "test2"] },
  quote1: { quote: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V Berard" },
  quote2: { quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", author: "Brian Kernighan" },
  quote3: { quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" }
};

// Configuration
app.configure(function(){
  app.use(express.static(__dirname + '/public'));

  // disable layout
  app.set("view options", {layout: false});

  // make a custom html template
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.post('/echo1/', function(req, res){
  try { 
    var id = url.parse(req.url).pathname;
    if (id.charAt(0) === '/') id = id.slice(1);
    if (id.charAt(id.length-1) === '/' ) id = id.slice(0, id.length-1);

        console.log('posted')
        // the body of the POST is JSON payload.  It is raw, not multipart encoded.
        var data = '';
        req.addListener('data', function(chunk) { data += chunk; });
        req.addListener('end', function() {

          store[id] = JSON.parse(data);
          console.log(store);
          res.writeHead(200, {'content-type': 'text/plain' });
          res.end()
        });

  } catch (e) {
    res.writeHead(500, {'content-type': 'text/plain' });
    res.write('ERROR:' + e);
    res.end('\n');
  }
});

app.post('/pet/*', function(req, res){
  try { 
    var id = url.parse(req.url).pathname;
    if ( id.charAt(0) === '/' ) id = id.slice(1);
    if ( id.charAt(id.length-1) === '/' ) id = id.slice(0, id.length-1);
        console.log('posted')
        // the body of the POST is JSON payload.  It is raw, not multipart encoded.
        var data = '';
        req.addListener('data', function(chunk) { data += chunk; });
        req.addListener('end', function() {

          store[id] = JSON.parse(data);
          console.log(store);
          res.writeHead(200, {'content-type': 'text/plain' });
          res.end()
        });
  } catch ( e ) {
    res.writeHead(500, {'content-type': 'text/plain' });
    res.write('ERROR:' + e);
    res.end('\n');
  }
});

app.get('/echo1/', function(req, res){
  try { 
    var id = url.parse(req.url).pathname;
    if ( id.charAt(0) === '/' ) id = id.slice(1);
    if ( id.charAt(id.length-1) === '/' ) id = id.slice(0, id.length-1);
      console.log(store.length)
      if ( id in store ) {
        res.writeHead(200, {'content-type': 'text/json' });
        res.write( JSON.stringify(store[id]) );
        res.end('\n');
      } else {
        res.writeHead(404, {'content-type': 'text/plain' });
        res.write('no data for ' + id);
        res.end('\n');
      }
    } catch ( e ) {
      res.writeHead(500, {'content-type': 'text/plain' });
      res.write('ERROR:' + e);
      res.end('\n');
    }
});

app.get('/people/:id', function(req, res){
  try { 

    console.log(req.params.id)
    var id = req.params.id;
    // var id = url.parse(req.url).pathname;
    // console.log(id)
    // if ( id.charAt(0) === '/' ) id = id.slice(1);
    // console.log(id)
    // if ( id.charAt(id.length-1) === '/' ) id = id.slice(0, id.length-1);
    // console.log(id)


      if ( id in store ) {
        res.writeHead(200, {'content-type': 'text/json' });
        res.write( JSON.stringify(store[id]) );
        res.end('\n');
      } else {
        res.writeHead(404, {'content-type': 'text/plain' });
        res.write('no data for ' + id);
        res.end('\n');
      }
    } catch ( e ) {
      res.writeHead(500, {'content-type': 'text/plain' });
      res.write('ERROR:' + e);
      res.end('\n');
    }
});



app.get('/', function(req, res){
  res.render("balls.html");
});
app.get('/inline.html', function(req, res){
  res.render("inline.html");
});
app.get('/balls.html', function(req, res){
  res.render("balls.html");
});
app.get('/timers.html', function(req, res){
  res.render("timers.html");
});
app.get('/artificial.html', function(req, res){
  res.render("artificial.html");
});
app.get('/processimage.html', function(req, res){
  res.render("processimage.html");
});
app.get('/sync.html', function(req, res){
  res.render("sync.html");
});
app.get('/importing.html', function(req, res){
  res.render("importing.html");
});
app.get('/jsonp.html', function(req, res){
  res.render("jsonp.html");
});
app.get('/debug.html', function(req, res){
  res.render("debug.html");
});
app.get('/shared.html', function(req, res){
  res.render("shared.html");
});
app.get('/shared-inner.html', function(req, res){
  res.render("shared-inner.html");
});
app.get('/transfer.html', function(req, res){
  res.render("transfer.html");
});
app.get('/modules.html', function(req, res){
  res.render("modules.html");
});
app.get('/realtime.html', function(req, res){
  res.render("realtime.html");
});


app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);