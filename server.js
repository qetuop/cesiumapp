const express = require('express');
const app = express();

// need to access the nmp_modules files

// try and use gulp to copy files instead?
//app.use(express.static((__dirname, '/node_modules/cesium/Build')));
app.use('/scripts', express.static(__dirname + '/node_modules/cesium/Build'));
//app.use('/css',     express.static(__dirname + '/node_modules/cesium/Build/Cesium/Widgets/'));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('.'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
const listener = app.listen(3001, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
