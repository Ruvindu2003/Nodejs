// const { log } = require('console');
// var {sum,divide} = require('./calculate');
// const http= require('http');
// const path = require('path');
// const fs = require('fs');


const express=require('express');
const productService=require('./Product');
const bodyParser = require('body-parser');
const { log } = require('console');
const { Server } = require('http');
const app = express();
const PORT= process.env.PORT || 3000;
app.use(bodyParser.json());



app.get('/id', (req, res) => {
    let body=req.body;
    let id=req.params.id
    res.send(body,id)
    console.log(id,body);

});

app.post('/product/create/:id', (req, res) => {
    let body = req.body;
    let id = req.params.id;
    console.log(id);
    console.log(body);

    res.send(body);
});
app.put('/product/update/:id', (req, res) => {
    let body = req.body;
    let id = req.params.id;
    
    res.send(body);
    console.log("Product updated:", id);

    console.log("Product updated:", body);
});

app.get('/products', (req, res) => {
    const products = productService.getProduct;
    console.log('Products:', products);
    res.json(products);
});




// console.log("Sum:", sum(10, 20));
// console.log("Divide:", divide(10, 20));

// const server = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url === '/create-user') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const user = {
//         name: "ruvindu",
//         age: 23,
//         address: "Colombo",
//         email: "ruvindu@example.com"
//     };
//     res.end(JSON.stringify(user));
//     }

//     if(req.method === 'POST' && req.url === '/create-user-json') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         const user = {
//             name: "ruvindu",
//             age: 23,
//             address: "Colombo",
//             email: "ruvindu@example.com"
//     };
//     res.end(JSON.stringify(user)
// );
// };

// if(req.method === 'GET' && req.url === '/products') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const products = productService.getProduct;
//     log('Products:', products);
//     res.end(JSON.stringify(products));
// }

// });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



