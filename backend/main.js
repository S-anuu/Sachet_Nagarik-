//imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 4000

//database connection
mongoose.connect('mongodb+srv://anuusapkota10:ow7d3ZyV6CpN0SHe@cluster0.3m1dv67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(( )=> {
    console.log("Connected to db")
  })

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false,
})
)

app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

// set template engine
app.set('view engine', 'ejs')

//route prefix
app.use('', require('./routes'))

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}/`)
})