const {Client} = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 8080,
    password: "123",
    database: "wog_app"
})

client.connect();
client.query("select * from users", (err, res)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(res.rows);
    }
})