const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Create a MySQL connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Test database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to the MySQL database.');
  connection.release(); // Release connection back to the pool
});

// Export the database connection
module.exports = db;
