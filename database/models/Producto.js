module.exports() = (sequelize, dataTypes) => {
    let alias = "Producto";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(60),
            allowNull: true
        },
        description:{
            type: dataTypes.STRING(200),
            allowNull: true
        },
        category_id:{
            type: dataTypes.INTEGER(10),
            allowNull: true
        },
        price:{
            type: dataTypes.DOUBLE,
            allowNull: true
        },
        make_id:{
            type: dataTypes.INTEGER(10),
            allowNull: true
        },
        imagen: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    };

    let config = {
        tableName: "productos",
        timetamps: false
    }
    
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Producto_carrito, {
            as: 'producto',
            foreignKey: 'producto_id'
        })
        Producto.belongsTo(models.Producto_carrito, {
            as: 'carrito',
            foreignKey: 'carrito_id'
        })
    }
    return Producto;
}