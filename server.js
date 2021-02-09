const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const path = require('path')

const app = express()

connectDB()

app.use(express.json({ extended: false }))
app.use(cors())
app.use('/api/blog', require('./router/blogs'))
app.use('/api/user', require('./router/user'))

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {console.log(`Server is live on port ${PORT}`)})