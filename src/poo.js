const {Pool} = require("pg");
async function criarConexao () {

const pool = new Pool({
    connectionString: "postgres://wkuwkxpibpzowx:10464c891b8a00470d537aceb9cf6e53f07925998a94242393b2de40f744f91e@ec2-54-161-239-198.compute-1.amazonaws.com:5432/dfu3erjnp2t89f",
    ssl: {
        rejectUnauthorized: false
    }
});
}
criarConexao();