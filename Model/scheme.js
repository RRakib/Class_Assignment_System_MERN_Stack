// Required Files
let mongoose = require("mongoose");

// Student Schema
let studentDetails = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : Number,
        required : true
    },
    semester : {
        type : String,
        required : true
    },
    section : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
})

// Collection
let student = mongoose.model("student" , studentDetails);

// Exports
module.exports = student