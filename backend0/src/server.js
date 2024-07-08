require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database.js')

// import express from 'express'
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

// routes declaration
app.use('/', webRoutes)

connection.query(
    'SELECT * FROM users',
    function (err, results, fields) {
        console.log(results)
        console.log(fields)
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})