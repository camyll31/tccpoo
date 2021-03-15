let tccpoo = require("./tccpoo");
let Galeria = require("./model/Galeria");

async function sicronizar() {
    await tccpoo.sync();
}

sicronizar();