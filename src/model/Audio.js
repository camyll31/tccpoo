let {Sequelize, DataTypes}  = require("sequelize");
let tccpoo = require("../tccpoo");

const Audio = tccpoo.define("Audio",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
        
    }
)