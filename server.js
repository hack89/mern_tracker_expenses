const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const colors = require('colors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 8080
const transactions = require('./routes/transaction')


dotenv.config({ path: './config/config.env' })
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json())

app.use('/api/v1/transactions', transactions)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, () => console.log(`DB connected!`.cyan.underline.bold))




if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`.green.bold))