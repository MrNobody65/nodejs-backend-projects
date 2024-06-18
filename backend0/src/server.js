const express = require('express')
const path = require('path')
require('dotenv').config()

// import express from 'express'
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
    res.send('Hello World! in /abc')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})