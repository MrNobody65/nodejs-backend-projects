require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

// import express from 'express'
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config template engine
configViewEngine(app)

// routes declaration
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})