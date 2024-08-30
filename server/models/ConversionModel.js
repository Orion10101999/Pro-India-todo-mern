const mongoose  = require("mongoose");

const MessageSchema = new mongoose.Schema({
    text : {
        type : String,
        default : ''
    },
    imageURL : {
        type : String,
        default : ''
    },
    videoURL : {
        type : String,
        default : ''
    },
    seen : {
        type : Boolean,
        default : false
    }
},{timestamps : true})

const conversationSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : true
    },
    receiver : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
        required : true
    },
    message : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'Message',
        }
    ]
},{timestamps : true})

const MessageModel = mongoose.model('Message' , MessageSchema)

const ConversionModel = mongoose.model('Conversation',conversationSchema)

module.exports = {
    ConversionModel ,
    MessageModel
}