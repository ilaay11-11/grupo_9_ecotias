let db = require("../database/models");

const mainController = {
  home: async (req, res) => {
    await db.Producto.findAll({
      include: [{ association: "category" }],
    }).then(function (products) {
      let vinylProducts = products.filter(
        (producto) => producto.category.name === "Vinyl"
      );
      let woodProducts = products.filter(
        (producto) => producto.category.name === "Wood"
      );
      let graniteProducts = products.filter(
        (producto) => producto.category.name === "Granite"
      );
      res.render("users/index", {
        vinylProducts,
        woodProducts,
        graniteProducts,
      });
    });
  },
  productCart: (req, res) => res.render("users/productCart"),
  search: async (req, res) => {
    const { keywords } = req.query;

    await db.Producto.findAll().then((products) => {
      const resultados = products.filter(({ description, name }) => {
        return description.includes(keywords) || name.includes(keywords);
      });
      res.render("products/results", { resultados, keywords });
    });
  },
  cart: async(req, res) => res.render("users/cart")
};

module.exports = mainController;
