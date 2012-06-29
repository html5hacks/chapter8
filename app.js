
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

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