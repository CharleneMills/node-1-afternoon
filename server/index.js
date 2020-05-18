const express = require('express');
const app = express();
const SERVER_PORT = 4001;
const allprod = require('./getProducts.js');
const aprod = require('./getProduct.js');
const products = require('../products.json');


app.get('/api/products', allprod.getProducts)

app.get('/api/products/:pId', aprod.getProduct)


app.listen(SERVER_PORT, () => {
    console.log(`Server running on port: ${SERVER_PORT}`);
});

