var express = require('express'),
        app = express(),
        cors = require('cors'),
        request = require('request');


app.use(cors({
    origin: 'http://localhost:8000',
    credentials: true
}));

app.use('/', function (req, res) {
    var url = 'http://finance.yahoo.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});

var server = app.listen(3000, function () {
    console.log('The API mock is running at http://%s:%s', server.address().address, server.address().port);
});

