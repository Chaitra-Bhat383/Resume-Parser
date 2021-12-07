const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
var cookieParser = require('cookie-parser')


const app = express();
app.use(cookieParser())

dotenv.config({ path: './config.env' });

require('./db/conn');
require('./router/auth');
app.use(express.json());
const User = require('./model/userSchema');

app.use(require('./router/auth'));
const PORT = process.env.PORT;

// const middleware = (req, res, next) => {
//         console.log(`Hello my middleware`);
//         next();
//     }
    // app.get('/', (req, res) => {
    //     res.send(`Hello world from signup`);
    // });

// app.get('/home', middleware, (req, res) => {
//     res.send(`Hello world from home`);
// });

app.get('/about', (req, res) => {
    res.send(`Hello world from about`);
});

app.get('/upload', (req, res) => {
    res.send(`Hello world from upload`);
});

app.get('/result', (req, res) => {
    res.send(`Hello world from result`);
});

app.get('/text', (req, res) => {
    res.send(`Hello world from text`);
});

app.get('/stats', (req, res) => {
    res.send(`Hello world from stats`);
});

app.get('/upload', (req, res) => {
    res.send(a)
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});