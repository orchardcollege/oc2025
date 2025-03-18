const db = require('../config/db'); // Import database connection

exports.getAllComputers = (req, res) => {
  db.query('SELECT * FROM computers', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
