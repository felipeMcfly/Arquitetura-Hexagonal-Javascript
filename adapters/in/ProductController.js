class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    addProduct(req, res) {
        const { data } = req.body;
        const product = this.productService.addProduct(data);
        res.status(201).json(product);
    }

    editProduct(req, res) {
        const { id } = req.params;
        const product = this.productService.editProduct(parseInt(id));
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    }

    listProducts(req, res) {
        const products = this.productService.listProducts();
        console.log("PRODUTOS:", products)
        res.status(200).json(products);
    }
}

module.exports = ProductController;