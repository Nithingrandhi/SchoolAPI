const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'gondola.proxy.rlwy.net',
  user: 'root',
  password: 'KTmZTfiLyXnaQuYdyjZrZQaJSkxVjMzo',
  database: 'railway',
  port: 18964
});



db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

module.exports = db;
