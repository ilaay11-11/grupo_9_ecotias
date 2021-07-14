const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    index: (req, res) => res.render('products/products', { products }),
    create: (req, res) => {
        res.render('products/createProduct')
    },
    edit: (req, res) => {
        res.render('products/editProduct')
    },
    store: () => {

    },
    detail: (req, res) => {
        const productId = parseInt(req.params.id);

        const productSelected = products.find((producto) => {
			return producto.id == (productId)
		});


        res.render('products/productDetail', { productSelected })
    },
    update: () => {

    },
    destroy: () => {

    }
}

module.exports = productsController;