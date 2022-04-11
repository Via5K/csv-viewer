const express = require('express');
const parser = require('body-parser');;
const { static } = require('express');

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("assets"));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Server Started....');
});