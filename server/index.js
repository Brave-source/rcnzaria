const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const heroRoute = require('./routes/hero');
const sermonRoute =  require('./routes/sermon');

const app = express()
dotenv.config()

mongoose.connect('mongodb://localhost/zaria_church', function(){
    console.log('Connected to mongodb !')
})

app.use(cors())
app.use(express.json());
app.use('/api/sermons', sermonRoute);
app.use('/api/heros', heroRoute);

app.listen(5000, function(){
    console.log('Server has started at port 5000 !!')
})