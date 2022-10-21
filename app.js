const showRouter = require("./routes/shows")


const { info } = require("console")

const express = require("express")
const mongoose = require("mongoose")
const app = express()


app.use("/",showRouter)

mongoose.connect("mongodb://127.0.0.1:27017/node_project",{useNewUrlParser: true, useUnifiedTopology: true}).then(startServer )
//port
function startServer(){
    app.listen(4500,()=>{
        console.info("server running on 4500")
    })
}