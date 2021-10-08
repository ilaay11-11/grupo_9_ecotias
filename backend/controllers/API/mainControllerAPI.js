let db = require('../database/models');

const mainControllerAPI = {
    home: async (req, res) => {
        await db.Producto.findAll({
            include: [{association: 'category'}]
        })
        .then(function(products) {
            let brassProducts = products.filter(producto => producto.category.name === 'Brass');
            let steelProducts = products.filter(producto => producto.category.name === 'Steel');
            let graniteProducts = products.filter(producto => producto.category.name === 'Granite');
            res.render('users/index', { brassProducts, steelProducts, graniteProducts })
        });
    },
    productCart: (req, res) => res.render('users/productCart')
}

module.exports = mainControllerAPI;