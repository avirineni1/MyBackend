var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*var UserSchema = mongoose.Schema({
    _id : String,
    "firstname": String,
    "lastname": String,
    "password": String,
    "address": {
        "streetaddress": String,
        "city": String,
        "zipcode": String
    },
    "friends": {
        "username": String
    },
    "groups": [{
        "groupname": String
    }]
});*/


module.exports = mongoose.model('User', new Schema({
    _id : String,
    firstname: String,
    lastname: String,
    password: String,
    address: [{
        streetaddress: String,
        city: String,
        zipcode: String
    }],
    friends: {
        username: String
    },
    groups: [{
        groupname: String
    }],
    admin: Boolean
}));