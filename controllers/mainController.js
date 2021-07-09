const mainController = {
    home: (req, res) => res.render('users/index'),
    login: (req, res) => res.render('users/login'),
    productCart: (req, res) => res.render('users/productCart'),
    productDetail: (req, res) => res.render('users/productDetail'),
    register: (req, res) => res.render('users/register')
}

module.exports = mainController;