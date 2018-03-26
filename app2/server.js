const express = require('express');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.status(200).json('Hello from root!')
});

app.get('/api/test', (req, res) => {
  res.status(200).json({content: "This is test content from an API"})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);