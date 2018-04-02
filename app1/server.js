// server.js
const next = require('next');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const port = 8080;

// With express.js
const express = require('express');

app.prepare().then(() => {
  express().use(handler).listen(port);
  console.log(`Next.JS is listening on port ${port}`);
});