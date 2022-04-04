const express = require('express')
const mongoose = require('mongoose')
const exphbs = require("express-handlebars")

const app = express()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error')
})

db.on('open', () => {
    console.log('mongodb connected!')
})

app.engine('hbs', exphbs( { defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const port = 3000

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`App is running on http:/localhost:${port}`)
})