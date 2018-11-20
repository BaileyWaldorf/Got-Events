var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// https://github.com/mysqljs/mysql
// https://expressjs.com/en/guide/routing.html
const connection = mysql.createConnection({
  host     : '35.196.8.224',
  user     : 'root',
  password : '123',
  database : 'got_events_database'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

// for testing if server is running
app.get('/ping', function (req, res) {
    res.send('pong')
})

// allows you to query any table in the database
app.get('/query-table', function (req, res) {
    connection.query(`SELECT * FROM ${req.query.table}`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// allows you to query any table in the database
app.get('/rso-events', function (req, res) {
    var query = `
        SELECT *
        FROM events, RSOs
        WHERE events.rso_id IS NOT NULL AND events.rso_id = RSOs.rso.id
    `;
                    
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

app.post('/insert-user', function(req, res){
    console.log('body is ', req.body);
    
    var query = `
        INSERT INTO users (username, u_password, email, university, u_type)
        VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.university}', ${req.body.u_type});
    `;

    connection.query(query, function(err, result) {
        if(err) console.log("Uh oh:", err);
        console.log("Inserted a user into the database!");
    });
    res.send("success");
});

// Start the server
app.listen(3001, () => {
    console.log('Query any table - http://localhost:3001/query-table?table=<TABLE_NAME>')
    console.log('Create a new user - http://localhost:3001/insert-user (make sure body type is JSON and method is POST)');
    console.log('Query any table - http://localhost:3001/query-table?table=<TABLE_NAME>')
});
