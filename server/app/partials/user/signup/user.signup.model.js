'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({

    FirstName: {
        type: String,
        trim: true,
        default: ''
    },
    LastName: {
        type: String,
        trim: true,
        default: ''
    },
    EmailId: {
        type: String,
        trim: true,
        default: '',
        unique: true,
        index: true,
        required:true

    },
    CreateDate: {
        type:Date,
        default:Date.now()
    },
    Password:{
        type:String,
        required:true,
        trim:true
    }


});

module.exports = mongoose.model('users', UserSchema);