const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


const index = require('./routes/index');
const product = require('./routes/products');

app.use('/', index);
app.use('/products', product);

module.exports = app;