const express = require('express');
const mongoose = require('mongoose');
const sermonRoute =  require('./routes/sermon');

const app = express()

mongoose.connect('mongodb://localhost/zaria_church', function(){
    console.log('Connected to mongodb !')
})

app.use(express.json());
app.use('/api/sermons', sermonRoute);

app.listen(5000, function(){
    console.log('Server has started at port 5000 !!')
})