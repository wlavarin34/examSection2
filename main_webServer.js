var express = require('express');
var app = express();
var myPower = require('./src/common/util/math/myPowers.js');

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

// set root route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' }
    };
    res.render('./views/pages/home.ejs', data2template);
});

app.get('/square', function(req, res) {
    var data2template = {
        head: { title: 'Square page' },
        inpNumberA: 2,
        resultNumberA: myPower.toSquare(2),
       
    };

    res.render('./views/pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var data2template = {
        head: { title: 'Cube page' },
        inpNumberB: 3,
     resultNumber: myPower.toCube(3)
    };
    res.render('./views/pages/cube.ejs', data2template);
});


app.get('/about', function(req, res) {
    res.status(200).render('./views/pages/about.html');
});


app.get('/*', function(req, res) {
    res.status(404).render('./views/pages/error.ejs', { head: { title: 'Error page' } });
});
// start express server
var server = app.listen(8012, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});