const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();

const server = require('http').createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/' // important: not /peerjs here
});

app.use('/peerjs', peerServer); // mount at /peerjs route

server.listen(10000, () => {
  console.log('✅ PeerJS Server running on port 10000');
});
