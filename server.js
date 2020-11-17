const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

connectDB()

app.use(express.json({ extended: false }))
app.use(cors())
app.use('/api/blog', require('./router/blogs'))
app.use('/api/user', require('./router/user'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {console.log(`Server is live on port ${PORT}`)})