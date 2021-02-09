const mongoose = require('mongoose')
const config = require('config');

const connectDB = () => {
    mongoose.connect(config.get('mongo_uri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, () => {
            console.log('Database is up')
    })
}

module.exports = connectDB