const { validationResult } = require('express-validator');
// const path = require('path');
const bcrypt = require('bcryptjs');
// const User = require('../models/User');
let db = require('../../database/models/');
const Usuario = require('../../database/models/Usuario');

const usersControllerAPI = {
    // index: (req, res) => res.render('users/index'),
    //create: (req, res) => res.render('users/register'),
    store:  async (req, res) => {
        db.Usuario.create(
            {
                    name: req.body.name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password,5),
                    image: req.body.image
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/usuarios/register'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/api/usuarios/register'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
        .catch(error => res.send(error))
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
        let usuarioId = req.params.id;
        db.Usuario.update(
            {
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,5),
                image: req.body.image
            },
            {
                where: {id: usuarioId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    status: 200,
                    total: confirm.length,
                    url: '/api/usuarios',
                    data:confirm
                }
            }else{
                respuesta ={
                    status: 204,
                    total: confirm.length,
                    url: '/api/usuarios',
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))

    },
    destroy: (req, res) => {
        let usuarioId = req.params.id;
        
        db.Usuario.destroy({where: {id: usuarioId}, force: true}) 
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                        status: 200,
                        total: confirm.length,
                        url: '/api/usuarios' ,
                        data:confirm
                }
            }else{
                respuesta ={
                        status: 204,
                        total: confirm.length,
                        url: '/api/usuarios',
                        data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
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
	},
    'listado': (req, res) => {
        db.Usuario.findAll()
        .then(usuario => {
            let datas= [];
            for(let i=0; i<usuario.length; i++){
            let respuesta = {
                id: usuario[i].id,
                name: usuario[i].name,
                last_name: usuario[i].last_name,
                email: usuario[i].email,
                detail: '/api/usuarios/' + usuario[i].id
            };
            datas.push(respuesta)
            }
            let adata = {
                
                count: usuario.length,
                url: '/api/usuarios',
                status: 200,
                users: datas
            }
                res.json(adata);
            })
    },
    'detaile': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(usuario => {
                let respuesta = {
                    url: '/api/usuarios/' + req.params.id,
                    data: {
                        id: usuario.id,
                        name: usuario.name,
                        last_name: usuario.last_name,
                        email: usuario.email,
                        //password: bcrypt.hashSync(usuario.password,10),
                        imagen: usuario.image,
                        result: usuario.length 
                    }
                }
                res.json(respuesta)
        })
    }
}

module.exports = usersControllerAPI;