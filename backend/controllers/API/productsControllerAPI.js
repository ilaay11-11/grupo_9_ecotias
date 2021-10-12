const { validationResult } = require('express-validator');
//const { QueryInterface } = require('sequelize/types');
const { sequelize, Sequelize } = require('../../database/models/');
let db = require('../../database/models/');

const productsControllerAPI = {
    
    index: async (req, res) => {
        await db.Producto.findAll({
            attributes: {
                attributes: [
                    'category_id',
                    [db.sequelize.fn('COUNT', db.sequelize.col('category_id')), 'category_id']
                ],
                group: ['category_id'], raw: true, exclude: ['price', 'image']
            }
        }

            //attributes: [
            //'category_id',
            //[db.sequelize.fn('COUNT', db.sequelize.col('category_id')), 'category_id']
            //],
            //group: ['category_id']
            //}
        )
            .then(productos => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/productos'
                    },
                    count: productos.length,
                    //productos.forEach(info => {
                    //return info.dataValues.count                    
                    //}),
                    data: productos,
                    detail: '/api/productos/:id'

                }
                res.json(respuesta);
            });


    },
    create: async (req, res) => {
        db.Producto
            .create(
                {
                    name: req.body.name,
                    description: req.body.description,
                    image: req.body.image
                }
            )
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/productos/create'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/productos/create'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    store: async (req, res) => {
        const resultValidation = validationResult(req);
        console.log(resultValidation);
        if (resultValidation.errors.length > 0) {

            let categories = await db.Category.findAll();
            let makers = await db.Maker.findAll();

            Promise.all([categories, makers])
                .then(([categories, makers]) => {
                    return res.json(
                        {
                            errors: resultValidation.mapped(),
                            oldData: req.body, categories, makers
                        });
                })
                .catch(err => console.log(err));
        } else {
            if (req.file) {
                await db.Producto.create({
                    name: req.body.name,
                    description: req.body.description,
                    image: req.file.filename,

                    price: req.body.price,
                    maker_id: req.body.maker
                });
            } else {
                await db.Producto.create({
                    name: req.body.name,
                    description: req.body.description,
                    category_id: req.body.category,
                    price: req.body.price,
                    maker_id: req.body.maker
                });

            };
            res.json(req.body);
        }
    },
    detail: async (req, res) => {
        db.Producto.findByPk(req.params.id)

            .then(producto => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: producto.length,
                        url: '/api/movie/:id'
                    },
                    data: producto
                }
                res.json(respuesta);
            });
    },
    edit: async (req, res) => {
        let productId = parseInt(req.params.id);

        let product = await db.Producto.findByPk(productId, {
            include: [{ association: 'category' }, { association: 'maker' }]
        });
        let categories = await db.Category.findAll();
        let makers = await db.Maker.findAll();

        Promise.all([categories, makers, product])
            .then(([categories, makers, product]) => {
                return res.json(product);
            });
    },
    update: async (req, res) => {
        let productId = req.params.id;
        console.log(productId)
        console.log(req.body)
        db.Producto.update(
            {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                category_id: req.body.category,
                price: req.body.price,
                maker_id: req.body.maker
            },
            {
                where: { id: productId }
            })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/productos/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/productos/update/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let productId = req.params.id;
        console.log(productId)
        db.Producto
            .destroy({ where: { id: productId }, force: true })
            .then(confirm => {
                let respuesta;
                console.log('confirm', confirm)
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/productos/delete/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/productos/destroy/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    }
};

module.exports = productsControllerAPI;