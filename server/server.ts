const express = require("express");
const cors = require("cors");
const {Client} = require("pg");
//const mysql = require("pg");
const app = express();

// Create MySQL connection
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 8080,
    password: "123",
    database: "wog_app"
})
client.connect();
app.use(cors());

app.get("/", (req: any, res: { json: (arg0: string) => any; }) => {
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
app.listen(5000, () => {
    console.log("Server is running");
});
