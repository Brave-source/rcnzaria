    const mongoose = require('mongoose')

const SermonSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    img:  {
        type: String,
        require: true,
    },
    audioMessage: {
        type: String,
        default: ''
    },
    minister: {
        type: String,
        require: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Sermon', SermonSchema)