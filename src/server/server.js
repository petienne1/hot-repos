const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

app.get("/", (request, response) => {
  response.send("Hi BitSight, welcome to my assignment!")
});

// API key
// https://api.github.com/user/repos?page=2&per_page=100'

app.listen(8000, () => {
  console.log("Listening on port 8000...");
});
