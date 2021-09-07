const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    home: (req, res) => {
        let brassProducts = products.filter(producto => producto.category === 'Brass');
        let stoneProducts = products.filter(producto => producto.category === 'Stone');
        let graniteProducts = products.filter(producto => producto.category === 'Granite');
        res.render('users/index', { brassProducts, stoneProducts, graniteProducts })
    },
    productCart: (req, res) => res.render('users/productCart')
}

module.exports = mainController;