let tccpoo = require("./tccpoo");
let Denuncia = require("./model/Denuncia");

async function sicronizar() {
    await tccpoo.sync();
}

sicronizar();