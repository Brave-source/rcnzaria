const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true,
        unique: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Hero', HeroSchema);