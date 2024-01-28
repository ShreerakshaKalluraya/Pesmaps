
const mongoose =require('mongoose')

const FeedbackSchema= new mongoose.Schema({
    name : String,
    email :String,
    message : String
})

const FeedbackModel=mongoose.model("feedback",FeedbackSchema)
module.exports=FeedbackModel