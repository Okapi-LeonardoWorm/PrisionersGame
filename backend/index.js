import express from "express";
import cors from "cors";
import db from "./db_connection.js";

const app = express();
// var cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

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
    // const q = "INSERT INTO players (`name`, `file`, `creationDate`, `creationTime`) VALUES (?)";
    // const values = [
    //     req.body.name,
    //     req.body.file,
    //     req.body.creationDate,
    //     req.body.creationTime
    // ]

    db.query(req, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })  
})

app.listen(8800, () => {
    console.log("Connected to port 8800!");
})

