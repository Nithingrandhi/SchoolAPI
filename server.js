const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

// Function to calulate distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const dx = lat2 - lat1;
  const dy = lon2 - lon1;
  return Math.sqrt(dx * dx + dy * dy);
}

// POST /addSchool
app.post('/addSchool', (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Input validation
  if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
    return res.status(400).json({
      error: 'All fields (name, address, latitude, longitude) are required and must be valid.'
    });
  }

  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  const values = [name, address, latitude, longitude];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error: ' + err.message });
    }

    res.status(201).json({
      message: 'School added successfully.',
      schoolId: result.insertId
    });
  });
});

// GET /listSchools
app.get('/listSchools', (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  // Validate user coordinates
  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({
      error: 'Valid latitude and longitude query parameters are required.'
    });
  }

  const query = 'SELECT * FROM schools';

  db.query(query, (err, schools) => {
    if (err) {
      return res.status(500).json({ error: 'Database error: ' + err.message });
    }

    const sortedSchools = schools.map(school => {
      const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
      return {
        ...school,
        distance: parseFloat(distance.toFixed(2))
      };
    }).sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
});
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
