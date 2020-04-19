var cors = require('cors');
var express = require('express');
var request = require('request');

var app = express().use(cors());

var APP_KEY = '103355941355539';

app.get('/:characterId', function (req, res) {
    var { characterId } = req.params;

    request(`https://superheroapi.com/api/${APP_KEY}/${characterId}`, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            res.send(body);
        }
    });
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Server running on port http://localhost:${port}/`);
});
