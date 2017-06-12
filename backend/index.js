const express = require('express')
const app = express()
const compression = require('compression')
const mongoose = require('mongoose')
const bluebird = require('bluebird')

// Compresses any response >1Kb.
// This is very useful while returning chat history.
app.use(compression())

//Connect to mongodb
mongoose.promise = bluebird
if (!mongoose.connection.db)
{
    mongoose.connect('mongodb://localhost:27017/chatDb')
}
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error to mongodb'))
db.once('open', console.log.bind(console, 'connected to mongodb'))

app.get('/', function (req, res)
{
    res.send('Hello World! Bye World!!')
})

app.get('/chatroom/:userId', function (req, res)
{
    res.send(req.params)
})

app.listen(3000, function()
{
    console.log('Example app listening to port 3000!')
})
