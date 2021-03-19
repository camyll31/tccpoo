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
        foto: DataTypes.STRING,
        video: DataTypes.STRING,
        PessoaEndereco2: {
            type: DataTypes.STRING,
            references: {
                model: Pessoa,
                key:'endereco'
            }
        }
    }
);
Pessoa.belongsto(Galeria);
Galeria.hasMany(Pessoa, {as: 'pessoas'})
Galeria.getPessoas();

module.exports = Pessoa;