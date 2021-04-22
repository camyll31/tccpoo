const Amigos = require("../model/Amigos");
const Audio = require("../model/Audio");
const Denuncia = require("../model/Denuncia");
const Galeria = require("../model/Galeria");
const Pessoa = require("../model/Pessoa");
const Policia = require("../model/Policia");

var amigos = {

    create: async function (objeto){
try{
    let amigos = await Amigos.create(objeto);
    console.log(amigos);
    }
catch(e){
    throw new error (name = "ERRO")
    console.log(e.name)
  }
},
        let: async function (){
 try{
    let amigos = await Amigos.findAll();

        console.log(amigos);
        }
        catch (e){
    throw new error (name= "ERRO");
console.log(e.name);
}
},

    atualizar: async function (atualizarNome, atualizarSobrenome, telefone, id){
try{
const nome = await Amigos.findByPk(id);
        await novo.update({nome:`${atualizarNome}`});
        await novo.update({sobrenome:`${atualizarSobrenome}`});
        await novo.update({telefone:`${telefone}`});
    }
catch (e){
     throw new error (name = "ERRO")
     console.log(e.name)
}
},
    deletar: async function (id){
try{
        const object = await Amigos.findByPk(id);
        let amigos = await object.destroy();
        console.log(amigos);
}
catch (e){
 throw new error (name = "ERRO")
 console.log(e.name)
      }
   }
}

var audio = {

    create: async function (objeto){
try{
    let audio = await Audio.create(objeto);
    console.log(audio);
    }
catch(e){
    throw new error (name = "ERRO")
    console.log(e.name)
  }
},
        let: async function (){
 try{
    let audio = await Audio.findAll();

        console.log(audio);
        }
        catch (e){
    throw new error (name= "ERRO");
console.log(e.name);
}
},

    atualizar: async function (PessoaEndereco, id){
try{
const nome = await Audio.findByPk(id);
        await novo.update({endereco:`${PessoaEndereco}`});
    }
catch (e){
     throw new error (name = "ERRO")
     console.log(e.name)
}
},
    deletar: async function (id){
try{
        const objeto = await Audio.findByPk(id);
        let audio = await objeto.destroy();
        console.log(audio);
}
catch (e){
 throw new error (name = "ERRO")
 console.log(e.name)
      }
   }
}

var Denuncia = {

    create: async function (objeto){
try{
    let denuncia = await Denuncia.create(objeto);
    console.log(denuncia);
    }
catch(e){
    throw new error (name = "ERRO")
    console.log(e.name)
  }
},
        let: async function (){
 try{
    let denuncia = await Denuncia.findAll();

        console.log(denuncia);
        }
        catch (e){
    throw new error (name= "ERRO");
console.log(e.name);
}
},

    atualizar: async function (violenciadomestica, estupro, assedio, pedofilia, id){
try{
const nome = await Denuncia.findByPk(id);
        await novo.update({violenciadomestica:`${violenciadomestica}`});
        await novo.update({estupro:`${estupro}`});
        await novo.update({assedio:`${assedio}`});
        await novo.update({pedofilia:`${pedofilia}`});
    }
catch (e){
     throw new error (name = "ERRO")
     console.log(e.name)
}
},
    deletar: async function (id){
try{
        const objeto = await Denuncia.findByPk(id);
        let denuncia = await objeto.destroy();
        console.log(denuncia);
}
catch (e){
 throw new error (name = "ERRO")
 console.log(e.name)
      }
   }
}

var pessoa = {

    create: async function (objeto){
try{
    let pessoa = await Pessoa.create(objeto);
    console.log(pessoa);
    }
catch(e){
    throw new error (name = "ERRO")
    console.log(e.name)
  }
},
        let: async function (){
 try{
    let pessoa = await Pessoa.findAll();

        console.log(pessoa);
        }
        catch (e){
    throw new error (name= "ERRO");
console.log(e.name);
}
},

    atualizar: async function (Nomeatualizar, Sobrenomeatualixar, telefoneatualizar, enderecoatualizar id){
try{
const nome = await Pessoa.findByPk(id);
            await novo.update({nome:`${Nomeatualizar}`});
            await novo.update({sobrenome:`${Sobrenomeatualixar}`});
            await novo.update({telefone:`${telefoneatualizar}`});
            await novo.update({endereco:`${enderecoatualizar}`});
    }
catch (e){
     throw new error (name = "ERRO")
     console.log(e.name)
}
},
    deletar: async function (id){
try{
        const objeto = await Pessoa.findByPk(id);
        let pessoa = await objeto.destroy();
        console.log(pessoa);
}
catch (e){
 throw new error (name = "ERRO")
 console.log(e.name)
      }
   }
}

var policia = {

    create: async function (objeto){
try{
    let policia = await Policia.create(objeto);
    console.log(policia);
    }
catch(e){
    throw new error (name = "ERRO")
    console.log(e.name)
  }
},
        let: async function (){
 try{
    let policia = await Policia.findAll();

        console.log(policia);
        }
        catch (e){
    throw new error (name= "ERRO");
console.log(e.name);
}
},

    atualizar: async function (enderecoatualiza, id){
try{
const nome = await Policia.findByPk(id);
            await novo.update({endereco:`${enderecoatualiza}`});
    }
catch (e){
     throw new error (name = "ERRO")
     console.log(e.name)
}
},
    deletar: async function (id){
try{
        const objeto = await Policia.findByPk(id);
        let policia = await objeto.destroy();
        console.log(policia);
}
catch (e){
 throw new error (name = "ERRO")
 console.log(e.name)
      }
   }
}

module.exports = Amigos;
module.exports = Audio;
module.exports = Denuncia;
module.exports = Galeria;
module.exports = Pessoa;
module.exports = Policia;