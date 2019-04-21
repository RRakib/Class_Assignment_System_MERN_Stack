// Required Files
let express = require("express")
let mongoose = require("mongoose")
let mongoURI = require("./config/key");

// Middleware
let app = express()
app.use(express.urlencoded({extended : false}))
app.use(express.json())

// Connecting to MongoDB Atlas
mongoose.connect(mongoURI.mongoDB , {useNewUrlParser : true})
    .then(()=>{
        console.log("Connected to mongoDB");
    })
    .catch((err) =>{
        console.log("Error!!! " + err)
    })

// PORT
let port = process.env.PORT || 5000;

// Listeting To PORT
app.listen(port , () => {
    console.log("Listening To Port 5000")
})