const mainController = {
    home: (req, res) => res.render('users/index'),
    login: (req, res) => res.render('users/login'),
    productCart: (req, res) => res.render('users/productCart'),
    register: (req, res) => res.render('users/register')
}

module.exports = mainController;