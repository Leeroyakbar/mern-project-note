const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')


// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => {console.log(err)
    console.log(err.message);
})

const app = express()

// middleware
app.use(express.json())


app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`))