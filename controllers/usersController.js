const { validationResult } = require('express-validator');
// const fs = require('fs');
// const path = require('path');
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
// const User = require('../models/User');
let db = require('../database/models');

const usersController = {
    // index: (req, res) => res.render('users/index'),
    create: (req, res) => res.render('users/register'),
    store:  async (req, res) => {
        const resultValidation = validationResult(req);
        console.log(resultValidation);
		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		};
            if(req.file) {
                await db.Usuario.create({
                    name: req.body.first_name,
                    last_name: req.body.last_name,
                    image: req.file.filename,
                    email: req.body.email,
                    password: req.body.password
                    // password: bcrypt.hashSync(req.body.password, 10)
                });
            } else {
                await db.Usuario.create({
                    name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: req.body.password
                    // password: bcrypt.hashSync(req.body.password, 10)
                });
            };

        res.redirect('/usuarios/login');
    },
    edit: async (req, res) => {
        const userId = parseInt(req.params.id);

        await db.Usuario.findByPk(userId)
        .then(userToEdit => {
            userToEdit ? res.render('users/editUser', {userToEdit}) : res.render("users/not-found");
        })
    },
    detail: (req, res) => {
        // console.log(req.cookies.userActive);
        return res.render('users/profile', {
			userProfile: req.session.userLogged
		});
    },
    update: async (req, res) => {
        if(req.file) {
            await db.Usuario.update({
                name: req.body.first_name,
                last_name: req.body.last_name,
                image: req.file.filename,
                email: req.body.email,
                password: req.body.password
                // password: bcrypt.hashSync(req.body.password, 10)
            }, {
                where: {
                    id: req.params.id
                }
            });
        } else {
            await db.Usuario.update({
                name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password
                // password: bcrypt.hashSync(req.body.password, 10)
            }, {
                where: {
                    id: req.params.id
                }
            });
        };
        res.redirect('profile');

    },
    destroy: (req, res) => {
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/');

    },
    login: (req, res) => {
        return res.render('users/login')
    },
    loginProcces: async (req, res) => {
        function validateLogin(user) {
            if(user){
                if(req.body.password === user.password){
                    delete user.password;
                    req.session.userLogged = user;
                    
                    if(req.body.recuerdame) {
                        res.cookie('userActive', req.body.email, { maxAge: (1000 * 60 * 60 * 24) })
                    }
    
                    return res.redirect('/usuarios/profile')
                }
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'Contraseña incorrecta'
                        }
                    },
                    oldData: req.body
                });
            }

            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Email no encontrado'
                    }
                },
                oldData: req.body
            })
        }

        db.Usuario.findOne({where: {email: req.body.email}})
        .then(user => {
            validateLogin(user);
        })
        
    },
    logout: (req,res) => {
        res.clearCookie('userActive');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = usersController;