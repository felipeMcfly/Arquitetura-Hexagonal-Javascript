class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async addProduct(req, res) {
        const { data } = req.body;
        const product = await this.productService.addProduct(data);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Erro ao criar o produto' });
        }
    }

    async editProduct(req, res) {
        const { id } = req.params;
        const { data } = req.body;
        const product = await this.productService.editProduct(parseInt(id), data);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Erro ao editar o produto' });
        }
    }

    async deleteProduct(req, res) {
        const { id } = req.params;
        const product = await this.productService.deleteProduct(parseInt(id));
        if(product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Erro ao deletar o produto' });
        }
    }

    async listProducts(req, res) {
        const products = await this.productService.listProducts();
        if(products) {
            res.status(200).json(products);
        } else {
            res.status(404).json({ message: 'Erro ao buscar os produtos' });
        }
    }
}

module.exports = ProductController;