class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    addProduct(data) {
        const product = new this.productRepository.ProductClass(
            data
        );
        return this.productRepository.save(product);
    }

    editProduct(id) {
        const product = this.productRepository.findById(id);
        if (product) {
            product.edit();
            return this.productRepository.save(product);
        }
        return null;
    }

    async listProducts() {
        return await this.productRepository.findAll();
    }
}

module.exports = ProductService;
