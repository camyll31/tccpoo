let {Sequelize, DataTypes}  = require("sequelize");
let tccpoo = require("../tccpoo");

const Amigos = tccpoo.define("Amigos",
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: DataTypes.INTEGER
    }
)