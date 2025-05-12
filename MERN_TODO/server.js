// npmjs.com, serach express, search nodemon
// import express
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require("colors")
const cors = require("cors")
const connectDB = require('./config/db')

// env configuration
dotenv.config()

// DB connection
connectDB();

// create rest object
// add entire functionality of express inside app
const app = express()

// middleware
app.use(express.json())//most commonly json format used to send/receive
app.use(cors())
app.use(morgan("dev"))// to find which url is being used, if you access link: eg. http://localhost:8080/test and press enter, shows url endpoint which was hit, status code, what time it took

// routes
// url pattern eg.test followed by callback function(define or arrow function) takes req and sends response

app.use('/api/v1/user', require("./routes/userRoute"))
// naming convention
app.use('/api/v1/test', require('./routes/testRouter'))
// app.get('/test', (req, res) => {
//     res.status(200).send('<h1>Welcome to Node Server Again and again</h1>')
// })


// port
const PORT = process.env.PORT || 8000;

// listen: how we run our application
app.listen(PORT, () => {
    console.log(`Node Server Running on ${process.env.Dev_Mode} mode on Port Number ${PORT}`.bgMagenta)
})
// To run node server: node .\server.js
// To access url, go to browser, since it is get request
// http://localhost:8080/test, see response: Welcome to Node Server
// But unlike in react with autorefresh, here if we change content of response, it won't show even on refresh, so we need 3rd party packages: nodemon
