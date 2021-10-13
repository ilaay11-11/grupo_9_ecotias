const { validationResult } = require("express-validator");
const { sequelize, Sequelize } = require("../../database/models/");
let db = require("../../database/models/");

const productsControllerAPI = {
  listado: async (req, res) => {
    await db.Producto.findAll({
      include: [
        { association: "category", attributes: ["name"] },
        { association: "maker", attributes: ["name"] },
      ],

      // include: [{ association: category, attributes: ["name"] }, { association: maker, attributes: ["name"] }]

      // attributes: ['itemId', [sequelize.fn('count', sequelize.col('itemId')), 'count']],
      // group : ['SaleItem.itemId'],
      // raw: true,
      // order: sequelize.literal('count DESC')

      // include: [{ association: "category" }, { association: "maker" }]
    }).then((productos) => {
      let respuesta = {
        count: productos.length,
        countByCategory: "hi",
        data: productos,
        random: productos.data,
      };
      res.json(respuesta);
    });
  },
  detalle: async (req, res) => {
    await db.Producto.findByPk(req.params.id, {
      include: [
        { association: "category", attributes: ["name"] },
        { association: "maker", attributes: ["name"] },
      ],
    }).then((producto) => {
      let respuesta;
      if (producto.image === "" || producto.image === null) {
        respuesta = {
          meta: {
            status: 200,
            url: req.originalUrl,
          },
          data: {
            id: producto.id,
            name: producto.name,
            description: producto.description,
            price: producto.price,
            image:
              "https://ecotias.herokuapp.com/images/productImages/default.jpg",
            additionalInfo: [
              {
                category: {
                  id: producto.category_id,
                  name: producto.category.name,
                },
                maker: { id: producto.maker_id, name: producto.maker.name },
              },
            ],
          },
        };
        res.json(respuesta);
      } else {
        respuesta = {
          meta: {
            status: 200,
            url: req.originalUrl,
          },
          data: {
            id: producto.id,
            name: producto.name,
            description: producto.description,
            price: producto.price,
            image:
              "https://ecotias.herokuapp.com/images/productImages/" +
              producto.image,
            additionalInfo: [
              {
                category: {
                  id: producto.category_id,
                  name: producto.category.name,
                },
                maker: { id: producto.maker_id, name: producto.maker.name },
              },
            ],
          },
        };
        res.json(respuesta);
      }
    });
  },
};

module.exports = productsControllerAPI;
