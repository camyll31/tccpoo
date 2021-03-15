let tccpoo = require("./tccpoo");
let Pessoa = require("./model/Pessoa");

async function sicronizar() {
    await tccpoo.sync();
}

sicronizar();