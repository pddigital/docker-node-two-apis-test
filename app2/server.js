const express = require("express");
const redis = require("redis");
const fetch = require("isomorphic-unfetch");
cors = require("cors");

const redisClient = redis.createClient({
  host: "192.168.0.1", // The redis's server ip
  port: "6379"
});

redisClient.on("connect", err => {
  console.log("Connected to Redis!");
});

console.log("test 23");

// Constants
const PORT = 8090;
const HOST = "0.0.0.0";

// App
const app = express();


const corsOptions = {
  origin: [
    "http://192.168.0.1:8080",
    "http://localhost:8080"
  ],
  default: "http://localhost:8080",
  credentials: true
};
app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.status(200).json("Hello from root!");
});

app.get("/api/films", (req, res) => {
  fetch("https://swapi.co/api/films")
    .then(response => {
      return response.json();
    })
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/api/films/one/:dataUrl", (req, res) => {
  fetch(req.params.dataUrl)
    .then(response => {
      return response.json();
    })
    .then(response => {
      return res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
