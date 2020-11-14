const express = require('express')

const Router = express.Router()

Router.get('/', (req, res) => {
    res.send("GET Blog")
})

Router.post('/', (req, res) => {
    res.send("POST Blog")
})

Router.put('/', (req, res) => {
    res.send("PUT Blog")
})

Router.delete('/', (req, res) => {
    res.send("DELETE Blog")
})

Router.get('/dashboard', (req, res) => {
    res.send("READ ALL Blog")
})

module.exports = Router