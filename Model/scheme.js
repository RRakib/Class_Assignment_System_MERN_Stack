// Required Files
let mongoose = require("mongoose");

// Class Schema
let classModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})

//  Sectin Schema
let section = new mongoose.Schema({
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
    class : [classModel],
    section : [section]
})

// Collection
let student = mongoose.model("student" , studentDetails);

// Exports
module.exports = student