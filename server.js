/**
 * Created by sajju on 5/16/2017.
 */

var express = require('express');
var path = require('path'); // get path of file
var mysql = require('mysql');
var bodyparser = require('body-parser'); //to require data from post queries
var app = express();

//connection to mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

//database name
connection.query('USE test');

app.use(express.static(__dirname + '/client_app')); // loads index.js from client_app
app.use(bodyparser.json()); //support json-encoded bodies
app.use(bodyparser.urlencoded({ //support url-encoded bodies
    extended: true
}));

app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname + '/client_app/index.html'));
});

app.get('/api/v1/getUsers', function(req, res){
    connection.query('SELECT * from userdetail', function(err, rows){
        if(err){
            res.json({message: "error retrieving list"});
        }else {
            res.json({users: rows});
        }
    });
});

app.post('/api/v1/addUser', function(req, res){
    var data = req.body;
    connection.query('INSERT INTO userdetail set ? ', data, function(err, rows){
     if(err){
         res.json({message: "Error on saving"});
     }else {
         res.json({message: "Saved Successfully"});
     }
    });
});

app.post('/api/v1/getUserById', function(req, res){
    var id = req.body.id;
    connection.query("SELECT * from userdetail where id = ?", id, function(err, rows){
        if(err){
            rws.json({message: "Error Updating user"});
        }else{
            res.json({user: rows});
        }

    });
});

app.post('/api/v1/updateUser', function(req, res) {
    var data = req.body;
    var id = req.body.id;
    connection.query("Update userdetail set ? where id = ?", [data, id], function(err, rows){
        if(err){
            res.json({message: "Error Updating data."})
        }else {
            res.json({message: "Update successful."})
        }
    });
});

app.post('/api/v1/deleteUser', function(req, res){
    var id = req.body.id;
    connection.query("DELETE from userdetail where id = ? ", id, function(err, rows){
        if(err){
            res.json({message: "Error deleting user."})
        }else {
            res.json({message: "User deleted successfully."})
        }
    });
});

app.listen(9000, '127.0.0.1');

