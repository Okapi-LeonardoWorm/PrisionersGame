import mysql from "mysql";


// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'game'
});

// Connect
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }

    console.log('Connected to database');
});

// If there is any problem, use this:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';


export default db;