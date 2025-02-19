//Create web server
var express = require('express');
var app = express();
var fs = require("fs");

// Get all comments
app.get('/listComments', function (req, res) {
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

// Add a comment
app.get('/addComment', function (req, res) {
    // First read existing comments.
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["comment4"] = req.query.comment;
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Delete a comment
app.get('/deleteComment', function (req, res) {
    // First read existing comments.
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["comment4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

// Start server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Comment App listening at http://%s:%s", host, port)
})
// In comments.js, the code is exactly the same as the code in comments.js. The only difference is the name of the file, which is comments