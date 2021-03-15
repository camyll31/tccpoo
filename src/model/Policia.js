let {Sequelize, DataTypes}  = require("sequelize");
let tccpoo = require("../tccpoo");

const Policia = tccpoo.define("Policia",
    {
        endereco: DataTypes.STRING
    }
)