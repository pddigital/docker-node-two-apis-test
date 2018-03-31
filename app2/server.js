const express = require('express');
const redis = require("redis");
const fetch = require("isomorphic-unfetch");

const redisClient = redis.createClient({
  host: "192.168.0.1", // The redis's server ip
  port: "6379"
});

redisClient.on("connect", err => {
  console.log("Connected to Redis!");
});

console.log('test 2')

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.status(200).json('Hello from root!')
});

app.get('/api/test', (req, res) => {
  redisClient.set('testkey', 'and a test value from redis');
  fetch("https://swapi.co/api/planets/1/")
    .then(response => {
      return response.json();
    })
    .then(response => {
      redisClient.get('testkey', (err, content) => {
        return res.status(200).json(response.name + ' ' + content);
      })
    })
    .catch(err => {

      console.log(err);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);