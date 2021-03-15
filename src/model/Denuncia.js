let {Sequelize, DataTypes}  = require("sequelize");
let tccpoo = require("../tccpoo");

const Denuncia = tccpoo.define("Denuncia",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        
        violenciadomestica: DataTypes.INTEGER,
        estupro: DataTypes.INTEGER,
        assedio: DataTypes.INTEGER,
        pedofilia: DataTypes.INTEGER
    }
)