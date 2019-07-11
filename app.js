const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//import routes
const postsRoute = require('./routes/posts');


//have the ability to create routes now
app.get('/', (req, res) => {
    res.send('We are on home');
})
app.get('/posts', (req, res) => {
    res.send('We are on posts');
})

//connect to DB 
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true } ,() => {
    console.log('connected to DB')
})

app.listen(5500);