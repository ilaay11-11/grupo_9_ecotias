const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {
    // index: (req, res) => res.render('users/index'),
    create: (req, res) => res.render('users/register'),
    store: (req, res) => {

        const resultValidation = validationResult(req);
		if (resultValidation.errors.length > 0) {
			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		};

		const userInDB = User.findByField('email', req.body.email);
		if (userInDB) {
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este usuario ya está registrado'
					}
				},
				oldData: req.body
			});
		}

        const newUser = req.body;
        
        console.log(req.file);
        if(req.file) {
            const userImage = req.file.filename;
            users.push({id: users.length +1, ...newUser, password: bcrypt.hashSync(req.body.password, 10), image: userImage});
        } else {
            users.push({id: users.length +1, ...newUser, password: bcrypt.hashSync(req.body.password, 10), image: 'default.png'});
        }
        
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/usuarios/login');
    },
    edit: (req, res) => {
        const userId = parseInt(req.params.id);

        const userToEdit = users.find((usuario) => {
            return usuario.id === userId;
        });
        
        userToEdit ? res.render('users/editUser', {userToEdit}) : res.render("users/not-found");
    },
    detail: (req, res) => {
        console.log(req.cookies.userActive);
        return res.render('users/profile', {
			userProfile: req.session.userLogged
		});
    },
    update: (req, res) => {
        const userInfo = req.body;
        const userIndex = users.findIndex((usuario) => {
            return usuario.id === parseInt(req.params.id);
        })
        
        if(req.file){
            newImage = req.file.filename;
            users[userIndex] = {...users[userIndex], image: newImage, ...userInfo, password: bcrypt.hashSync(userInfo.password, 10)};
        } else {
            users[userIndex] = {...users[userIndex], ...userInfo, password: bcrypt.hashSync(userInfo.password, 10)};
        }
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/');

    },
    destroy: (req, res) => {
        const userIndex = users.findIndex ((usuario) => {
			return usuario.id === parseInt(req.params.id);
		});

        users.splice(userIndex, 1);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/');
        
    } ,
    login: (req, res) => {
        return res.render('users/login')
    },
    loginProcces: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        // console.log(req.body);
        if(userToLogin){
			let isOk = bcrypt.compareSync(req.body.password, userToLogin.password);
			if(isOk){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

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
    },
    logout: (req,res) => {
        res.clearCookie('userActive');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = usersController;