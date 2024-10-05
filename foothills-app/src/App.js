// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Patient from './components/Patient';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  /*
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientsData = await fetch('http://localhost:3001/api/patients').json(); // Update port here
        const doctorsData = await fetch('http://localhost:3001/api/doctors').json();   // Update port here
        const appointmentsData = await fetch('http://localhost:3001/api/appointments').json(); // Update port here

        setPatients(patientsData);
        setDoctors(doctorsData);
        setAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
*/
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Patient" element={<Patient />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
