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

// APIs


app.listen(8000, () => {
  console.log("Listening on port 8000...");
});
