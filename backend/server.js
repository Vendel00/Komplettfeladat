const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());

// Adatbázis kapcsolat létrehozása
    const db = mysql.createConnection({
        user: "root",
        host: "127.0.0.1",
        port: 3307,
        password: "root",
        database: "",
});

// Gyökér útvonal, tesztelésre
    app.get("/", (req, res) => {
        res.send("Fut a backend!");
})

// Szerver indítása a 3001-es porton
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
});