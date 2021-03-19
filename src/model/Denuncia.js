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
        pedofilia: DataTypes.INTEGER,
        PessoaEndereco2: {
            type: DataTypes.STRING,
            references: {
                model: Pessoa,
                key:'endereco'
            }
        }
    }
);
Pessoa.belongsto(Denuncia);
Denuncia.hasMany(Pessoa, {as: 'pessoas'})
Denuncia.getPessoas();

module.exports = Pessoa;