const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3001; // Port for the backend

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // For parsing application/json

const pool = new Pool({
	user: 'user',
	host: 'localhost',
	database: 'Hospital (SEC)',
	password: 'postgres',
	port: 5432,
});

// Route to get all patients
app.get('/api/patients', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM Patients');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

app.get('/api/doctors', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM Doctors');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

app.get('/api/appointments', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM Appointments');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
