const express = require('express');
const fetch = require('isomorphic-unfetch');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  fetch('http://192.168.0.2:8090/api/test').then(response => {
    return response.json()
  }).then(response => {
    return res.status(200).json(response);
  })
  .catch(err => {
    console.log(err)
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);