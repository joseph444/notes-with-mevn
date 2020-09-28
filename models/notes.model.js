const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    created_at:{
        type:Number,
        default: new Date().getTime()
    },
    updated_at:{
        type:Number,
        default: new Date().getTime()
    }
});

module.exports = mongoose.model("notes",NoteSchema);