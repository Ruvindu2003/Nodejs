const { log } = require('console');
var {sum,divide} = require('./calculate');
const http= require('http');
const path = require('path');
const fs = require('fs');
const PORT = 3000;
const productService=require('./Product');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/create-user') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const user = {
        name: "ruvindu",
        age: 23,
        address: "Colombo",
        email: "ruvindu@example.com"
    };
    res.end(JSON.stringify(user));
    }

    if(req.method === 'POST' && req.url === '/create-user-json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const user = {
            name: "ruvindu",
            age: 23,
            address: "Colombo",
            email: "ruvindu@example.com"
    };
    res.end(JSON.stringify(user)
);
};

if(req.method === 'GET' && req.url === '/products') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const products = productService.getProduct;
    log('Products:', products);
    res.end(JSON.stringify(products));
}

});






server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



