const fs = require('fs');
const key = fs.readFileSync('./server.key');
const cert = fs.readFileSync('./server.cert');

var express = require('express');
const https = require('https');
var cookieParser = require('cookie-parser');

var POSTS = {
  '1': {'post': 'This is the first blog post.'},
  '2': {'post': 'This is the second blog post.'},
  '3': {'post': 'This is the third blog post.'}
};

var isPreflight = function(req) {
  var isHttpOptions = req.method === 'OPTIONS';
  var hasOriginHeader = req.headers['origin'];
  var hasRequestMethod = req.headers['access-control-request-method'];
  return isHttpOptions && hasOriginHeader && hasRequestMethod;
};

var handleCors = function(req, res, next) {
  res.set('Access-Control-Allow-Origin', 'https://localhost:1111');
  res.set('Access-Control-Allow-Credentials', 'true');
  if (isPreflight(req)) {
    res.set('Access-Control-Allow-Methods', 'GET, DELETE');
    res.set('Access-Control-Allow-Headers',
            'Timezone-Offset, Sample-Source');
    res.set('Access-Control-Max-Age', '120');
    res.status(204).end();
    return;
  }
  next();
};

var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(cookieParser());
serverapp.use(express.static(__dirname));
serverapp.use(handleCors);
serverapp.get('/', function (req, res) { res.send('secure serverapp at port 9999') })
serverapp.get('/api/posts', function(req, res) {
  res.json(POSTS);
});
serverapp.delete('/api/posts/:id', function(req, res) {
  console.log('req.cookies: ', req.cookies)
  if (req.cookies['username'] === 'owner') {
    delete POSTS[req.params.id];
    res.status(204).end();
  } else {
    res.status(403).end();
  }
});
const serverHttps = https.createServer({key: key, cert: cert}, serverapp);
serverHttps.listen(SERVER_PORT, function() {
  console.log('Started secure server at https://127.0.0.1:' + SERVER_PORT);
});


var CLIENT_PORT = 1111;
var clientapp = express();
const clientHttpsServer = https.createServer({key: key, cert: cert}, clientapp);
clientapp.use(express.static(__dirname));
clientapp.get('/', function (req, res) { res.send('secure client at port 1111') })
clientHttpsServer.listen(CLIENT_PORT, function() {
  console.log('Started secure client at https://localhost:' + CLIENT_PORT);
});
