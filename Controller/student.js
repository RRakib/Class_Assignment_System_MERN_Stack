let express = require("express")
let route = express.Router();
let studentModel = require("../Model/scheme")

route.post("/" , (req , res) => {
    studentModel(req.body).save()
        .then((resData) => {
            console.log(resData);
            res.json(resData)
        })
        .catch(err => console.log("Error!! " + err))
})

module.exports = route