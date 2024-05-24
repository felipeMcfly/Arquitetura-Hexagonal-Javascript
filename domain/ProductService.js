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

    editProduct(id,data) {
        const product = new this.productRepository.ProductClass(
            data
        );
        return this.productRepository.editProduct(id,product);
    }

    deleteProduct(id) {
        return this.productRepository.deleteProduct(id);
    }

    listProducts() {
        return this.productRepository.findAll();
    }
}

module.exports = ProductService;
