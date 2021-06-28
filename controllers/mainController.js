const mainController = {
    home: (req, res) => res.render('users/index'),
    login: (req, res) => res.render('users/login'),
    productCart: (req, res) => res.render('users/productCart'),
    productDetail: (req, res) => res.render('users/productDetail'),
    register: (req, res) => res.render('users/register'),
    createProduct: (req, res) => res.render('users/crearProducto') // Provisional
}

module.exports = mainController;