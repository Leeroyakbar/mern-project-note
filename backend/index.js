const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')

// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => {console.log(err)
    console.log(err.message);
})

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes/authRoutes'))
app.use('/notes', require('./routes/noteRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`))