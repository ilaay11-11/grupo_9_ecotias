const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {
    index: (req, res) => res.render('products/products', { products }),
    create: (req, res) => res.render('products/createProduct'),
    edit: (req, res) => {
        const productId = parseInt(req.params.id);

		const productToEdit = products.find((producto) => {
			return producto.id === productId;
		});

        productToEdit ? res.render('products/editProduct', { productToEdit }) : res.render("products/product-not-found");
    },
    store: (req, res) => {
        const newInfo = req.body;
        const newProduct = products.push({id: products.length +1, image: "shampoo.JPG", ...newInfo});
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/productos');
    },
    detail: (req, res) => {
        const productId = parseInt(req.params.id);

        const productSelected = products.find((producto) => {
			return producto.id == (productId)
		});

        productSelected ? res.render('products/productDetail', { productSelected }) : res.render("products/product-not-found");
    },
    update: (req, res) => {
        const productInfo = req.body;
        const productIndex = products.findIndex((producto) => {
            return producto.id === parseInt(req.params.id);
        })
        products[productIndex] = {...products[productIndex], ...productInfo};
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/productos');
    },
    destroy: (req,res) => {
        const productIndex = products.findIndex ((producto) => {
			return producto.id === parseInt(req.params.id);
		});
        products.splice(productIndex, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/productos')
    }
}

module.exports = productsController;