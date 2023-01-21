const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/auth');
const heroRoute = require('./routes/hero');
const sermonRoute =  require('./routes/sermon');

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URL, function(){
    console.log('Connected to mongodb !')
})

app.use(cors())
app.use(express.json());
app.use('/api/sermons', sermonRoute);
app.use('/api/heros', heroRoute);
app.use('/api/users', userRoute)

app.listen(5000, function(){
    console.log('Server has started at port 5000 !!')
})