mmodule.exports() = (sequelize, dataTypes) => {
    let alias = "Producto_carrito";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        carrito_id: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        },
        producto_id: {
            type: dataTypes.INTEGER(10),
            allowNull: true
        }
    };

    let config = {
        tableName: "producto_carrito",
        timetamps: false
    }
    
    return Producto_carrito;
}