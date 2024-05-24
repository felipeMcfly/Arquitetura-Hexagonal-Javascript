const ProductRepositoryPort = require('../../ports/ProductRepositoryPort');
const Product = require('../../domain/ProductDataJSONConstructor');

class InMemoryProductRepository extends ProductRepositoryPort {
    constructor() {
        super();
        this.products = [];
        var mysql = require('mysql');
        this.con = mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: 'root',
            database: "products"
        })
        this.con.connect( err => {
            if (err) throw err;
            console.log("Conectado no MYSQL!")
        });
    }

    save(data) {
        console.log(data)
        const values = [data.name];
        this.con.query("INSERT INTO products(name) VALUES (?)", values, (err, result) => {
            if (err) throw err;
            console.log("Produto inserido");
            return ("Produto inserido");
        });
    }

    findById(id) {
        return this.products.find(product => product.id === id);
    }

    findAll() {
        this.con.query("SELECT * FROM products", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result
        });
    }

    nextId() {
        return this.products.length + 1;
    }

    get ProductClass() {
        return Product;
    }
}

module.exports = InMemoryProductRepository;
