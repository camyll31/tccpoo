const Amigos = require("../model/Amigos");
const Audio = require("../model/Audio");
const Denuncia = require("../model/Denuncia");
const Galeria = require("../model/Galeria");
const Pessoa = require("../model/Pessoa");
const Policia = require("../model/Policia");

var Amigos = {
    create: async function (objeto){
        let a = await Amigos.create(objeto);
        console.log(a);
    },
    ler: async function (){
        let a = await Amigos.findAll();
        console.log(a);
    },
    atualizar: async function(nome, sobrenome, telefone){
        const usu = await Amigos.findByPk(sobrenome);
        await usu.update({nome:`${nome}`});
        await usu.update({telefone:`${telefone}`});
    },
    deletar: async function (sobrenome){
        const object = await Amigos.findByPk(sobrenome);
        let a = await object.destroy();
        console.log(a);
}
}

var Audio = {

    create: async function (objeto){
    let b = await Audio.create(objeto);
    console.log(b);
    },
    ler: async function (){
        let b = await Audio.findAll();
        console.log(b);
        },

    atualizar: async function (PessoaEndereco, id){
        const novo = await Assunto.findByPk(id);
        await novo.update({endereco:`${PessoaEndereco}`});
    },
    deletar: async function (id){
        const object = await Audio.findByPk(id);
        let b = await object.destroy();
        console.log(b);
}
}

var Denuncia = {

    create: async function (objeto){
        let c = await Denuncia.create(objeto);
        console.log(c);
    },
    ler: async function (){
     let c = await Denuncia.findAll();
     console.log(c);
    },
    atualizar: async function (violenciadomestica, estupro, assedio, pedofilia, id){
        const novo = await Denuncia.findByPk(id);
        await novo.update({violencia1:`${violenciadomestica}`});
        await novo.update({violencia2:`${estupro}`});
        await novo.update({violencia3:`${assedio}`});
        await novo.update({violencia4:`${pedofilia}`});
    },
     deletar: async function (id){
         const object = await Denuncia.findByPk(id);
         let c = await object.destroy();
         console.log(c);
     }
}
var Galeria = {

    create: async function (objeto){
    let d = await Galeria.create(objeto);
    console.log(d);
    },
    ler: async function (){
        let d = await Galeria.findAll();
        console.log(d);
        },

    atualizar: async function (foto, video, id){
        const novo = await Galeria.findByPk(id);
        await novo.update({foto:`${foto}`});
        await novo.update({video:`${video}`});
    },
    deletar: async function (id){
        const object = await Galeria.findByPk(id);
        let d = await object.destroy();
        console.log(d);
}
}
var Pessoa = {

    create: async function (objeto){
    let e = await Pessoa.create(objeto);
    console.log(e);
    },
    ler: async function (){
        let e = await Pessoa.findAll();
        console.log(e);
        },

    atualizar: async function (nome, sobrenome, endereco, telefone, id){
        const novo = await Pessoa.findByPk(id);
        await novo.update({nome:`${nome}`});
        await novo.update({sobrenome:`${sobrenome}`});
        await novo.update({telefone:`${telefone}`});
        await novo.update({endereco:`${endereco}`});
    },
    deletar: async function (id){
        const object = await Pessoa.findByPk(id);
        let e = await object.destroy();
        console.log(e);
}
}
var Policia = {

    create: async function (objeto){
    let f = await Policia.create(objeto);
    console.log(f);
    },
    ler: async function (){
        let f = await Policia.findAll();
        console.log(f);
        },

    atualizar: async function (endereco, id){
        const novo = await Assunto.findByPk(id);
        await novo.update({endereco:`${endereco}`});
    },
    deletar: async function (id){
        const object = await Policia.findByPk(id);
        let f = await object.destroy();
        console.log(e);
}
}
module.exports = Amigos;
module.exports = Audio;
module.exports = Denuncia;
module.exports = Galeria;
module.exports = Pessoa;
module.exports = Policia;