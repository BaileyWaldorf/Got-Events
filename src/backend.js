const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : '35.196.8.224',
  user     : 'root',
  password : '123',
  database : 'got_events_database'
});

// Initialize the app
const app = express();
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
connection.connect();

// https://expressjs.com/en/guide/routing.html
app.get('/rsos', function (req, res) {
    // connection.connect();

    connection.query('SELECT * FROM rsos', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    // connection.end();
});

app.get('/universities', function (req, res) {
    // connection.connect();

    connection.query('SELECT * FROM universities', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    // connection.end();
});

app.post('/insert-user', urlencodedParser, function(req, res){
    var query = `
        INSERT INTO users (username, u_password, email, university, u_type)
        VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.university}', ${req.body.u_type});
    `;

    connection.query(query, function(err, result) {
        if(err) throw err;
        console.log("Inserted a user into the database!");
    });
    res.send("success");
});

// Start the server
app.listen(3001, () => {
    console.log('Query rsos table - http://localhost:3001/rsos')
    console.log('Query universities table - http://localhost:3001/universities');
});
