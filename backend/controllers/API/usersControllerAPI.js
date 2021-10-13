let db = require("../../database/models/");

const usersControllerAPI = {
  listado: (req, res) => {
    db.Usuario.findAll().then((usuario) => {
      let datas = [];
      for (let i = 0; i < usuario.length; i++) {
        let respuesta = {
          id: usuario[i].id,
          name: usuario[i].name,
          last_name: usuario[i].last_name,
          email: usuario[i].email,
          detail: "/api/usuarios/" + usuario[i].id,
        };
        datas.push(respuesta);
      }
      let adata = {
        count: usuario.length,
        url: "/api/usuarios",
        status: 200,
        users: datas,
      };
      res.json(adata);
    });
  },
  detalle: (req, res) => {
    db.Usuario.findByPk(req.params.id).then((usuario) => {
      // console.log(usuario);
      let respuesta;
      if (usuario.image === "" || usuario.image === null) {
        respuesta = {
          meta: {
            status: 200,
            url: req.originalUrl
          },
          data: {
            id: usuario.id,
            name: usuario.name,
            last_name: usuario.last_name,
            email: usuario.email,
            imagen:
              "https://ecotias.herokuapp.com/images/userImages/default.png",
          },
        };
        res.json(respuesta);
      } else {
        respuesta = {
          meta: {
            status: 200,
            url: req.originalUrl
          },
          data: {
            id: usuario.id,
            name: usuario.name,
            last_name: usuario.last_name,
            email: usuario.email,
            imagen:
              "https://ecotias.herokuapp.com/images/userImages/" +
              usuario.image,
          },
        };
        res.json(respuesta);
      }
    });
  },
};

module.exports = usersControllerAPI;
