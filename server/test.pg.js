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
})app.get("/", (req: any, res: { json: (arg0: string) => any; }) => {
    const sql = "SELECT * FROM users";
    client.query(sql, (err: { message: string; }, data: { rows: any; })=>{
     if(err) return res.json("Error: "+err.message);
     return res.json(data.rows);
    })
 });
 app.get("/users", (req: any, res: { json: (arg0: string) => any; }) => {
     const sql = "SELECT * FROM users";
     client.query(sql, (err: { message: string; }, data: { rows: any; })=>{
      if(err) return res.json("Error: "+err.message);
      return res.json(data.rows);
     })
  });