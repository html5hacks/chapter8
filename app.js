
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
  res.render("index.html");
});
app.get('/index.html', function(req, res){
  res.render("index.html");
});
app.get('/swarm.html', function(req, res){
  res.render("swarm.html");
});
app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);