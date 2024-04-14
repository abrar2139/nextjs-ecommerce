const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true, "First name is reqauired field"],
        minLength:[3, "Title should be at least of 3 characters"],
        maxLength:[20,"Title should not exceed 20 characters"]
    },
    
    desc:{
        type:String,
        required:[true, "Description is reqauired field"],
        minLength:[3, "Description should be at least of 3 characters"],
       
    },
    
    price:{
        type:String,
        required:[true, "Price is reqauired field"],
    },
    selectedFile:{
        type:String,
       
    },
   
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const productModel = mongoose.model("product",productSchema)

module.exports = productModel