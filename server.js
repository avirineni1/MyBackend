'use strict';

var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test123');


var User = require('./model/User'),
    group = require('./model/Group');

app.get('/', function(req, res){
    res.send('this is the root of the app');
});

app.get('/setupDummyData', function(req, res){
    /*var ajay = new User({
        _id: 'avirineni1',
        firstname: 'ajay',
        lastname: 'averineni',
        password: '',
        admin: true
    });

     ajay.save(function(err){
     if(err) throw err;
     console.log('user saved successfully');
     });
    */

    var hemanth = new User({
        _id: 'hembus',
        firstname: 'hemanth',
        lastname: 'busireddy',
        password: '',
        admin: false
    });

    hemanth.save(function(err){
        if(err) throw err;
        console.log('user saved successfully');
    });
    res.json({success: "true"});
});

app.get('/users', function(req, res){
    User.find({}, function(error, users){
        res.json(users);
    });
});

app.listen(3000, function(req, res){
    console.log('listening to requests on port 3000');
});