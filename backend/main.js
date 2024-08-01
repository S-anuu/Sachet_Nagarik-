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
app.use('', require('./routes/aboutUs'))
app.use('', require('./routes/climateChange'))
app.use('', require('./routes/complaints'))
app.use('/complaints', require('./routes/complaints'))
app.use('', require('./routes/contactUs'))
app.use('', require('./routes/drinkingWater'))
app.use('', require('./routes/petitions'))
app.use('/petition', require('./routes/petitions'))
app.use('', require('./routes/profile'))
app.use('', require('./routes/queries'))
app.use('/queries', require('./routes/queries'))
app.use('', require('./routes/signIn'))
app.use('', require('./routes/signUp'))
app.use('', require('./routes/transportation'))
app.use('', require('./routes/womenRight'))
app.use('', require('./routes/communityEvents'))
app.use('/communityEvents', require('./routes/communityEvents'))
app.use('', require('./routes/polls'))
app.use('/polls', require('./routes/polls'))


// var AboutUsRouter = require('./routes/aboutUs')

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}/`)
})