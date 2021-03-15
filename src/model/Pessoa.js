let {Sequelize, DataTypes}  = require("sequelize");
let tccpoo = require("../tccpoo");

const Pessoa = tccpoo.define("Pessoa",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endereco: DataTypes.STRING,
        telefone: DataTypes.INTEGER
    }
)