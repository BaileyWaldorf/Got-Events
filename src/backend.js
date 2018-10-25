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

// https://expressjs.com/en/guide/routing.html
app.get('/RSOs', function (req, res) {
    // connection.connect();

    connection.query('SELECT * FROM RSOs', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    // connection.end();
});
// Start the server
app.listen(3001, () => {
 console.log('Go to http://localhost:3001/RSOs to see RSOs');
});
