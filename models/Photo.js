const mongoose = require('mongoose')
const schema = mongoose.Schema

//create schema
const PhotoSchema = new schema({

    title: String,
    description: String,
    image: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const Photo = mongoose.model('Photo', PhotoSchema)

module.exports = Photo