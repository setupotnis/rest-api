const express = require('express');

const app = express();

//Middlewares


//have the ability to create routes now
app.get('/', (req, res) => {
    res.send('We are on home');
})
app.get('/posts', (req, res) => {
    res.send('We are on posts');
})

app.listen(5500);