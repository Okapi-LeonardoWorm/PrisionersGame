import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "schema_test_app",
});

// If there is any problem, use this:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''

app.get("/", (req, res) => {
    res.json("Hello from backEnd!!");
})

app.get("/players", (req, res) => {
    const q = "SELECT * FROM players";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/sendplayer", (req, res) => {
    const q = "INSERT INTO players (`name`, `creation_date`, `creation_time`, `first_move`, `enemy_moves`) VALUES (?)";
    const values = ["Player2", "C:/Users/praus/Desktop/Trabalhos/Eu/Programacao/PrisionerGame/Players/PlayerLeo.js", "2021-03-01", "12:00:00"];

    db.query(req, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, () => {
    console.log("Connected to port 8800!");
})

