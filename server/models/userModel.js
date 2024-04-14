const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true, "First name is reqauired field"],
        minLength:[3, "First name should be at least of 3 characters"],
        maxLength:[20,"First name should not exceed 20 characters"]
    },
    
    lastName:{
        type:String,
        required:[true, "Last name is reqauired field"],
        minLength:[3, "Last name should be at least of 3 characters"],
        maxLength:[20,"Last name should not exceed 20 characters"]
    },
    
    email:{
        type:String,
        required:[true, "Email is reqauired field"],
    },
    password:{
        type:String,
        required:[true, "Password is reqauired field"],
        minLength:[8,"Password should be at least of 8 characters"]
    },
    phone:{
        type:String,
        required:[true, "Phone is reqauired field"],
    
    },
    avatar:{
        type:String,
    
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel