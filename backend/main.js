//imports
require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')
const session = require('express-session')
const jwt = require('jsonwebtoken')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname, 'views'))

//Templating Engine

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


// middleware/authMiddleware.js

function authenticateToken(req, res, next) {
  const token = req.cookies.auth_token || req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;

//database connection
mongoose.connect('mongodb+srv://anuusapkota10:ow7d3ZyV6CpN0SHe@cluster0.3m1dv67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(( )=> {
    console.log("Connected to db")
  })

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));
  

app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

// var AboutUsRouter = require('./routes/aboutUs')

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}/`)
})