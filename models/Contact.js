const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let userSchema = new Schema({
    name:{
        type : String,
        required : true
    },

    lastname: {
        type : String,
        required : true
    },

    country:{
        type : String,
        required : true
    },

    email: {
        type : String,
        required : true
    }, 
    message : {
        type : String,
        required : true
    },
 
},{
    timeStamps : true
})

module.exports = mongoose.model('User',userSchema)