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
    console.log("querying table: ", req.query.table)
    let table = req.query.table;
    connection.query(`SELECT * FROM ${table}`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// queries all rso-events for a specific user
app.get('/rso-events', function (req, res) {
    var query = `
        SELECT DISTINCT *
        FROM events, rso_members
        WHERE rso_members.username = '${req.query.username}' and rso_members.rso_id = events.rso_id;
    `;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// queries all public events
app.get('/public-events', function (req, res) {
    var query = `
        SELECT *
        FROM events
        WHERE events.private = 0
    `;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// queries all private events
app.get('/private-events', function (req, res) {
    console.log("finding all events for university: ", req.query.university)
    let university = req.query.university;
    var query = `
        SELECT *
        FROM events
        WHERE events.private = 1 AND events.rso_id IS NULL AND events.university_name = "${university}"
    `;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// pull comments from an event
app.get('/get-comments', function (req, res) {
    console.log("pulling all coments for this event...");
    var query = `
        SELECT *
        FROM comments
        WHERE comments.event = ${req.query.event};
    `;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// logs in a user
app.get('/login', function (req, res) {
    console.log("body: ", req.body)
    console.log("logging in user...");
    var query = `
        SELECT *
        FROM user
        WHERE user.username = '${req.query.username}' AND user.u_password = '${req.query.u_password}';
    `;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// registers a user
app.post('/register', function(req, res){
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

// creates a new event
app.post('/create-event', function(req, res){
    console.log('body is ', req.body);

    var query = `
        INSERT INTO events (rso_id, name, category, description, event_time, location, contact_num, contact_email, rating, university_name, private)
        VALUES (${req.body.rso_id}, '${req.body.name}', ${req.body.category}, '${req.body.description}', ${req.body.event_time}, '${req.body.location}',
        '${req.body.contact_num}', '${req.body.contact_email}', ${req.body.rating}, '${req.body.university_name}', ${req.body.private});
    `;

    connection.query(query, function(err, result) {
        if(err) console.log("Uh oh:", err);
        console.log("Created an event!");
    });
    res.send("success");
});

// join an rso
app.post('/join-rso', function(req, res){
    console.log('body is ', req.body);

    var query = `
        INSERT INTO rso_members (rso_id, username, university)
        VALUES ((   SELECT rso_id
                    FROM rsos
                    WHERE rsos.rso_name = '${req.body.rso_name}' and rsos.university = '${req.body.university}'), '${req.body.username}', '${req.body.university}');
    `;

    connection.query(query, function(err, result) {
        if(err) console.log("Uh oh:", err);
        console.log("Joined an RSO!");
    });
    res.send("success");
});

// create a comment
app.post('/create-comment', function(req, res){
    console.log('body is ', req.body);

    var query = `
        INSERT INTO comments (username, comment, event)
        VALUES ('${req.body.username}', '${req.body.comment}', ${req.body.event});
    `;

    connection.query(query, function(err, result) {
        if(err) console.log("Uh oh:", err);
        console.log("Created a comment!");
    });
    res.send("success");
});

// delete a comment
app.post('/delete-comment', function(req, res){
    console.log('body is ', req.body);

    var query = `
        DELETE
        FROM comments
        WHERE comments.username = '${req.body.username}' AND comments.event = ${req.body.event} AND comments.comment = '${req.body.comment}';
    `;

    connection.query(query, function(err, result) {
        if(err) console.log("Uh oh:", err);
        console.log("Deleted a comment!");
    });
    res.send("success");
});

// create a new university
app.post('/create-university', function(req, res){
    console.log('body is ', req.body);

    var query = `
        INSERT INTO universities (name, location, description)
        VALUES ('${req.body.name}', '${req.body.location}', '${req.body.description}');
    `;

    connection.query(query, function(err, result) {
        if(err) console.log("Uh oh:", err);
        console.log("Created a university!");
    });
    res.send("success");
});

// deletes an RSO
app.post('/delete-rso', function(req, res) {
    console.log('body is ', req.body);

    var query = `
        DELETE
        FROM rso_members
        WHERE username = '${req.body.username}' and rso_id = ${req.body.rso_id};
    `;

    connection.query(query, function(err, result) {
        if(err) console.log("Uh oh:", err);
        console.log("Successfully deleted the RSO!");
    });
    res.send("success");
});

// Start the server
app.listen(3001, () => {
    console.log("_____________________________GET REQUESTS_____________________________")
    console.log('Ping the server -              http://localhost:3001/ping')
    console.log('Query any table -              http://localhost:3001/query-table?table=<TABLE_NAME>')
    console.log('Query rso events -             http://localhost:3001/rso-events?username=<USERNAME>')
    console.log('Query public events -          http://localhost:3001/public-events>')
    console.log('Query private events -         http://localhost:3001/private-events?university=<UNIVERSITY>')
    console.log('Get comments for an event -    http://localhost:3001/get-comments?event=<EVENT>')
    console.log('Login a user -                 http://localhost:3001/login?username=<USERNAME>&u_password=<PASSWORD>')
    console.log("")
    console.log("_____________________________PUSH REQUESTS_____________________________")
    console.log('Register a user -              http://localhost:3001/register')
    console.log('                               Body:   username, password, email, university, u_type')
    console.log('Create an event -              http://localhost:3001/create-event')
    console.log(`                               Body:   rso_id, name, category, description, event_time, location, contact_num,
                                                        contact_email, rating, university_name, private`)
    console.log('Join an RSO -                  http://localhost:3001/join-rso')
    console.log('                               Body:   rso_name, university, username')
    console.log('Create a comment -             http://localhost:3001/create-comment')
    console.log('                               Body:   username, comment, event')
    console.log('Delete a comment -             http://localhost:3001/delete-comment')
    console.log('                               Body:   username, event, comment')
    console.log('Create a university -          http://localhost:3001/create-university')
    console.log('                               Body:   name, location, description')
    console.log('Delete an RSO -                http://localhost:3001/delete-rso')
    console.log('                               Body:   username, rso_id')
});
