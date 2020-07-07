const express = require('express');
const router = express.Router();
var app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');
const url = require('url');
const querystring = require('querystring');
const cors = require('cors');
app.use(bodyparser.json());
app.use(cors());

var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'shivam'
});
//URL PARSE

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('DB connection successful');
    } else {
        console.log('DB connection failed /n Error: ' + JSON.stringify(err, undefined, 2));
    }
});
//angular post
router.post('/enroll', (req, res) => {
    console.log(req.body);
    res.status(200).send({ "message": "Data recieved successfully" });
    name = req.body.name
    phone = req.body.mob
    email = req.body.email
    topic = req.body.topic
    valid = false;

    mysqlConnection.query("INSERT INTO `nodejs` (name,email,phone,topic) VALUES (?,?,?,?)", [name, email, phone, topic], (err, rows, fields) => {
        if (!err) {
            console.log(rows);


        } else {
            console.log("error: " + err.message);

            console.log("error:" + err.code);
            console.log("error:" + err.errno);
            https://github.com/ShivamGupta15/AngularApp.gi



        }
    })
})



router.get('/', (req, res) => {

    mysqlConnection.query('SELECT phone FROM nodejs', (err, rows, fields) => {
        if (!err) {
            for (var i = 0; i < rows.length; i++) {
                console.log(rows)

            }

        } else {
            console.error("error" + err);
        }
    });
});


router.get('/thriller', (req, res) => {

    res.send('This is Thriller section')
    console.log('Thriller section working')

});
router.post('/:name', (req, res) => {
    var name = req.params.name;
    console.log(name)



    mysqlConnection.query("INSERT INTO `nodejs` (name) VALUES (?)", [name, 9, 2004], (err, rows, fields) => {
        if (!err) {
            console.log(rows);


        } else {
            console.log("error");
        }
    })
})

module.exports = router;