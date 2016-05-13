var mongoose = require('mongoose');


var GroupSchema = mongoose.Schema({
    _id: String,
    "logo": String,
    "slogan": String,
    "members": [{
        "username": String
    }],
    "posts":[{
        "name": String,
        "location": String,
        "date": String,
        "postedby": String,
        "description": String,
        "votes": [{
            "username": String
        }]
    }]
});

var Group = mongoose.model('Group', GroupSchema);

module.exports = Group;