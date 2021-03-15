let tccpoo = require("./tccpoo");
let Policia = require("./model/Policia");

async function sicronizar() {
    await tccpoo.sync();
}

sicronizar();