const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//have the ability to create routes now
app.get('/', (req, res) => {
    res.send('We are on home');
})

//connect to DB 
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true } ,() => {
    console.log('connected to DB')
})

app.listen(5500);