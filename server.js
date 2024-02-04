const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true }); // Fix typo here

const mysql = require('mysql');

const server = app.listen(8510, function () {
    console.log('Server is listening on port 8510');
});

// Set the 'views' directory where your Pug files are located
app.set('views', './views');

// Set the view engine to Pug
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(express.static('public'));

// Route definitions
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/appointment_login', function (req, res) {
    res.render('appointments');
});

app.get('/patient-login', function (req, res) {
    res.render('patients');
});

app.get('/report', function (req, res) {
    res.render('reports');
});

app.get('/doctors_login', function (req, res) {
    res.render('doctors');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
