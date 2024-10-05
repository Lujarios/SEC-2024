const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3001; // Port for the backend

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // For parsing application/json

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'Hospital (SEC)',
	password: 'postgres',
	port: 5432,
});

// Get Patients from the database
app.get('/api/patients', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM Patients');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

// Add a new patient to the database
app.post('/api/patients', async (req, res) => {
	const { name, contact } = req.body;
	try {
		const result = await pool.query('SELECT COUNT(*) FROM Patients');
		const nextId = parseInt(result.rows[0].count) + 1;

		const newPatient = await pool.query(
			'INSERT INTO Patients (patient_id, name, contact) VALUES ($1, $2, $3) RETURNING *',
			[nextId, name, contact]
		);
		res.status(201).json(newPatient.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

// Get all doctors from the database
app.get('/api/doctors', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM Doctors');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

// Add a new doctor to the database
app.post('/api/doctors', async (req, res) => {
	const { name, specialty, available } = req.body;
	try {
		const result = await pool.query('SELECT COUNT(*) FROM Doctors');
		const nextId = parseInt(result.rows[0].count) + 1;

		const newDoctor = await pool.query(
			'INSERT INTO Doctors (doctor_id, name, specialty, available) VALUES ($1, $2, $3, $4) RETURNING *',
			[nextId, name, specialty, available]
		);
		res.status(201).json(newDoctor.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

// Get all appointments from the database
app.get('/api/appointments', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM Appointments');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

// Add a new appointment to the database
// Route to add a new appointment
app.post('/api/appointments', async (req, res) => {
	const { patient_id, doctor_id, date, start_time, end_time } = req.body;
	try {
		const result = await pool.query('SELECT COUNT(*) FROM Appointments');
		const nextId = parseInt(result.rows[0].count) + 1;

		const newAppointment = await pool.query(
			'INSERT INTO Appointments (appointment_id, patient_id, doctor_id, date, start_time, end_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
			[nextId, patient_id, doctor_id, date, start_time, end_time]
		);
		res.status(201).json(newAppointment.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

// Allow the frontend to execute queries on the database
app.post('/api/query', async (req, res) => {
	const { query } = req.body;

	try {
		const result = await pool.query(query);
		res.json(result.rows); // Return the query result rows
	} catch (error) {
		console.error('Error executing query:', error);
		res.status(500).json({ error: 'Error executing query' });
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
