var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;


//var cookieParser = require('cookie-parser');


//app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(upload.array());

//Require the Router we defined in movies.js
var movies = require('./enrolldetails.js');

//Use the Router on the sub route /movies
app.get('/', (req, res) => {
    res.send('Welcome to nodejs Server')
    console.log('server running')
})
app.use('/movies', movies);
app.listen(port, () => {
    console.log('Server is running at port: ' + port);
});