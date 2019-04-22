// Required Files
let mongoose = require("mongoose");

// Semester Schema
let SemesterModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})

// Section Schema
let Section = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})

// Subject Schema
let Subject = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
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
    semester : [SemesterModel],
    section : [Section],
    subject : [Subject]
})

// Collection
let student = mongoose.model("student" , studentDetails);

// Exports
module.exports = student