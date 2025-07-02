const { PeerServer } = require('peer');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const peerServer = PeerServer({
  port: PORT,
  path: '/',
  proxied: true,
});

app.use('/', peerServer);

console.log(`✅ PeerJS Server running on port ${PORT}`);
