const express = require('express');
const app = express();
const path = require('path')

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('.'));

// need to access the nmp_modules files, create fake dir
//app.use('/scripts', express.static(path.join(__dirname, '/node_modules/cesium/Build'))) // <script src="scripts/Cesium/Cesium.js"></script>

// access them directly?
app.use(express.static(path.join(__dirname, '/node_modules/cesium/Build/')))  // <script src="Cesium/Cesium.js"></script>

// try and use gulp to copy files instead?


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

// listen for requests :)
const listener = app.listen(3001, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
