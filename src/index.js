let tccpoo = require("./tccpoo");
let Amigos = require("./model/Amigos");

async function sicronizar() {
    await tccpoo.sync();
}

sicronizar();