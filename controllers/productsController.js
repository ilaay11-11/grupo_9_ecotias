let db = require('../database/models');

const productsController = {
    index: async (req, res) => {
        await db.Producto.findAll()
        .then(function(products) {
            res.render('products/products', {products: products});
        });
    },
    create: async (req, res) => {
        let categories = await db.Category.findAll();
        let makers = await db.Maker.findAll();
        
        Promise.all([categories, makers])
        .then( ([categories, makers]) => {
            return res.render('products/createProduct', {categories, makers});
        });
    },
    store: async (req, res) => {
        if(req.file) {
            await db.Producto.create({
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                category_id: req.body.category,
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
        }
    console.log(req.body);
    console.log(req.file);

        res.redirect('/productos');
    },
    detail: async (req, res) => {
        const productId = parseInt(req.params.id);
        await db.Producto.findByPk(productId, {
            include: [{association: 'category'}, {association: 'maker'}]
        })
        .then(function(productSelected) {
            productSelected ? res.render('products/productDetail', { productSelected }) : res.render("products/product-not-found");
        });
    },
    edit: async (req, res) => {
        const productId = parseInt(req.params.id);

        let product = await db.Producto.findByPk(productId, {
            include: [{association: 'category'}, {association: 'maker'}]
        });
        let categories = await db.Category.findAll();
        let makers = await db.Maker.findAll();
        
        Promise.all([categories, makers, product])
        .then( ([categories, makers, product]) => {
            return res.render('products/editProduct', {categories, makers, product});
        });
    },
    update: async (req, res) => {
        if(req.file) {
            await db.Producto.update({
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                category_id: req.body.category,
                price: req.body.price,
                maker_id: req.body.maker
            }, {
                where: {
                    id: req.params.id
                }
            });
        } else {
            await db.Producto.update({
                name: req.body.name,
                description: req.body.description,
                category_id: req.body.category,
                price: req.body.price,
                maker_id: req.body.maker
            }, {
                where: {
                    id: req.params.id
                }
            });
        };
        res.redirect('/productos/'+ req.params.id);
    },
    destroy: (req,res) => {
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/productos');
    }
};

module.exports = productsController;