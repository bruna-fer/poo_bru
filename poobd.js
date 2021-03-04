const {Pool} = require("pg");
async function criarConexao() {
    const pool = new Pool({
        connectionString: 'postgres://faddkvfeglvmbv:690884be8964439b30a59f7fd72a2107214eabd9fa9ac2b23b4f8a43cad8b1de@ec2-18-204-101-137.compute-1.amazonaws.com:5432/d5apldl21aqb8m', 
        ssl: {
            rejectUnauthorized: false
        }
    });

    let con = await pool.connect();
    let res = await con.query(`insert into pizza (sabores) values ($1), ($2), ($3)`,["Tropicana","Frango","Vegetariana"]);
    await con.query("select sabores from pizza")
    await con.query("update pizza set sabor = $1 where id = $2", ["Calabresa", 1]);
    await con.query("delete from pizza where sabores like 'Tropicana'");
let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
}con.release()
}
criar();