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
    store:  (req, res) => {
        // const resultValidation = validationResult(req);
		// if (resultValidation.errors.length > 0) {
		// 	return res.render('users/register', {
		// 		errors: resultValidation.mapped(),
		// 		oldData: req.body
		// 	});
		// };

        // let newUser = db.Usuario.findOne({
        //     where: {
        //         email: req.body.email
        //     }
        // })
        // .then(usuario =>console.log(usuario));
        //     if (req.body.email === usuario.email) {
        //         return res.render('users/register', {
        //             errors: {
        //                 email: {
        //                     msg: 'Este usuario ya está registrado'
        //                 }
        //             },
        //             oldData: req.body
        //         })
        //     }
            if(req.file) {
                db.Usuario.create({
                    name: req.body.first_name,
                    last_name: req.body.last_name,
                    image: req.file.filename,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10)
                });
            } else {
                db.Usuario.create({
                    name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10)
                });
            };

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
    loginProcces: async (req, res) => {
        let userToLogin = await db.Usuario.findOne({email: req.body.email})
        .then(user => {
            if(user){
                let isOk = bcrypt.compareSync(req.body.password, user.password);
                if(isOk){
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
        })


        // let userToLogin = User.findByField('email', req.body.email);
        // console.log(req.body);
        
        
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