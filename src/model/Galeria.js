let {Sequelize, DataTypes}  = require("sequelize");
let tccpoo = require("../tccpoo");

const Galeria = tccpoo.define("Galeria",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        foto: DataTypes.TIMESTAMP,
        video: DataTypes.TIMESTAMP
    }
)