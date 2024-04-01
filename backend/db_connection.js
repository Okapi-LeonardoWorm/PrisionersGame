// import mysql from "mysql";
const mysql = require('mysql');


// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: '',
    database: 'game.players'
});

// Connect
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }

    console.log('Connected to database');
});

export default db;