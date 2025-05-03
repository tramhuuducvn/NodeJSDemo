import mysql from 'mysql2';
import express from 'express';


var app = express();
app.listen(3000, function () {
    console.log('Node server running @ http://localhost:3000')
});

app.get('/hello', function (req, res) {

    // Create a connection
    const connection = mysql.createConnection({
        host: 'mysql-server',      // Replace with your MySQL host
        port: 3306,
        user: 'dbuser',           // Replace with your MySQL user
        password: 'P@ssw0rd',   // Replace with your MySQL password
        database: 'login_db'      // Replace with your database name
    });

    // Connect and test
    connection.connect(err => {
        if (err) {
            return console.error('Connection failed: ' + err.stack);
        }
        console.log('Connected as id ' + connection.threadId);
    });

    var sql = "show databases;";
    connection.query(sql, function (err, results) {
        console.log("Execute: ", sql);

        if (err) throw err;
        res.send(results);
    });
});
