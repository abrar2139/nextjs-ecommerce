 require('dotenv').config()
const express = require('express')
const connectDB = require('./database/db')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const cors = require('cors')
const app = express()
const port = process.env.PORT
connectDB()
app.use(express.json({limit: "50mb"}))
app.use(cors())

app.use("/api/v1",userRouter)
app.use("/api/v1",productRouter)

app.listen(port, ()=>{
    console.log(`Server is up and listening on port ${port}`)
})