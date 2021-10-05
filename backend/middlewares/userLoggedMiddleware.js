const User = require('../models/User');

function userloggedMiddleware (req, res, next){
    res.locals.isLogged = false;

    // Cookies
    let emailInCookie = req.cookies.userActive;
    let userFromCookie = User.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    // Session status
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
};

module.exports = userloggedMiddleware;