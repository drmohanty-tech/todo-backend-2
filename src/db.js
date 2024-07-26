// Dipti's Database Configuration
const mysql = require('mysql2');

// Create a connection pool
const connection = mysql.createPool({
  host: 'XXXXXXXXXXXXXXXXXXXXX',     // Replace with your MariaDB host
  user: 'drm1',         // Replace with your MariaDB username
  password: 'password@123',     // Replace with your MariaDB password
  database: 'todo_db'      // Replace with your MariaDB database name
});

module.exports = connection.promise();
