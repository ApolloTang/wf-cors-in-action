const fs = require('fs');
const key = fs.readFileSync('./server.key');
const cert = fs.readFileSync('./server.cert');

const express = require('express');
const https = require('https');
const app = express();
const server = https.createServer({key: key, cert: cert}, app);

app.get('/', (req, res) => { res.send('this is an secure server') });
server.listen(3001, () => { console.log('listening on https://localhost:3001/') });

