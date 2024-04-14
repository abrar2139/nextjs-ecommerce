const mongoose= require('mongoose')

const connectDB =()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`Database connected successfuly with host ${mongoose.connection.host}`)
    }).catch(err=>{
        console.log("Error occured",err)
    })
}

module.exports = connectDB