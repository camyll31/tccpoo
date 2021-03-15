let tccpoo = require("./tccpoo");
// let Pessoa = require("./model/Pessoa");
// let Amigos = require("./model/Amigos");
// let Audio = require("./model/Audio");
// let Galeria = require("./model/Galeria");
// let Policia = require("./model/Policia");
let Denuncia = require("./model/Denuncia");

async function sicronizar() {
    await tccpoo.sync();
}

sicronizar();