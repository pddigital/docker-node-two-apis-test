const express = require("express");
const fetch = require("isomorphic-unfetch");
const redis = require("redis");

const redisClient = redis.createClient({
  host: "192.168.0.1", // The redis's server ip
  port: "6379"
});

redisClient.on("connect", err => {
  console.log("Connected to Redis!");
});

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  redisClient.set('testkey', 'and a test value from redis');
  fetch("http://192.168.0.1:8090/api/test")
    .then(response => {
      return response.json();
    })
    .then(response => {
      redisClient.get('testkey', (err, content) => {
        return res.status(200).json(response.content + ' ' + content);
      })
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
