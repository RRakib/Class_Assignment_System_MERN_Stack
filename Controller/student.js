let express = require("express")
let route = express.Router();
let studentModel = require("../Model/scheme")

// Students Get Methods
route.get("/" , (req , res) => {
    studentModel.find()
        .then((resData) => {
            console.log(resData);
            res.json(resData)
        })
        .catch(err => console.log("Error!! " + err))
})

// Students Post Methods
route.post("/" , (req , res) => {
    studentModel(req.body).save()
        .then((resData) => {
            console.log(resData);
            res.json(resData)
        })
        .catch(err => console.log("Error!! " + err))
})

module.exports = route