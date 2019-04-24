// Required Files
let mongoose = require("mongoose");

// Section Schema
let Section = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
})

// Section Schema
let Semester = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
})

// Section Schema
let Subject = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
})

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
    semester : [Semester],
    section : [Section],
    subject : [Subject]
})

// Collection
let student = mongoose.model("student" , studentDetails);

// Exports
module.exports = student