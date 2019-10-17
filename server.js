const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();

//Iniciando o db
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    {useUnifiedTopology: true, useNewUrlParser: true }
);
require('./src/models/Product');

//Primeira rota
app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.listen(3001);