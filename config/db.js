const mongoose = require('mongoose')

module.exports = ()=>{
    mongoose.connect(process.env.MONGO_URI,(err)=>{
        if(err){
            console.log("Failed To Conenct Mongo DB...")
        }else{
            console.log("Successfully Connected To Mongo DB...")
        }
    })
}