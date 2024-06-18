const express = require('express')
const path = require('path')
// import express from 'express'
const app = express()
const port = 8080

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})