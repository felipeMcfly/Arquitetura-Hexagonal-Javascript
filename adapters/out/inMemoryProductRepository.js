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
        return new Promise((resolve, reject) => {
            console.log("DATA SAVE:", data)
            const values = [data.body.name];
            this.con.query("INSERT INTO products(name) VALUES (?)", values, (err, result) => {
                if (err) reject(err);
                console.log("Produto inserido!");
                resolve("Produto inserido!");
            });
        });
    }

    editProduct(id,data) {
        return new Promise((resolve, reject) => {
            console.log("DATA EDIT:", data)
            console.log("ID EDIT:", id)
            const values = [data.body.name, id]
            this.con.query("UPDATE products set name = (?) WHERE id = (?)", values, (err, result) => {
                if (err) reject(err);
                console.log("Produto Editado!");
                resolve("Produto Editado!");
            });
        });
    }

    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            console.log("ID DELETE:", id)
            const values = [id]
            this.con.query("DELETE from products WHERE id = (?)", values, (err, result) => {
                if (err) reject(err);
                console.log("Produto Deletado!");
                resolve("Produto Deletado!");
            });
        });
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.con.query("SELECT * FROM products", function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    get ProductClass() {
        return Product;
    }
}

module.exports = InMemoryProductRepository;
