const express = require('express');
const bodyParser = require('body-parser');
const ProductService = require('./domain/ProductService');
const ProductController = require('./adapters/in/ProductController');
const ProductInMemoryRepository = require('./adapters/out/inMemoryProductRepository');

const app = express();
app.use(bodyParser.json());

const productRepositoryInitializer = new ProductInMemoryRepository();
const productServiceInitializer = new ProductService(productRepositoryInitializer);
const productControllerInitializer = new ProductController(productServiceInitializer);

app.post('/products', (req, res) => productControllerInitializer.addProduct(req, res));
app.get('/products', (req, res) => productControllerInitializer.listProducts(req, res));
app.put('/products/:id/complete', (req, res) => productControllerInitializer.editProduct(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
