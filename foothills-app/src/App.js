// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Error from './components/Error';
import Patient from './Pages/Patient';
import Specialties from './Pages/Specialities';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Fetch all patients
  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/patients');
      const patientsData = await response.json();
      setPatients(patientsData);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  // Fetch all doctors
  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/doctors');
      const doctorsData = await response.json();
      setDoctors(doctorsData);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  // Fetch all appointments
  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/appointments');
      const appointmentsData = await response.json();
      setAppointments(appointmentsData);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  // Add a new patient
  /*
    * Usage: 
    * const patientData = { name: 'Alice Johnson', contact: '555-123-4567' };
    * addPatient(patientData):
    */
  const addPatient = async (newPatient) => {
    try {
      const response = await fetch('http://localhost:3001/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPatient),
      });
      const data = await response.json();
      setPatients((prev) => [...prev, data]);
      console.log('New patient added:', data);
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  // Add a new doctor
  /*
    * Usage: 
    * const doctorData = { name: 'Sam Smith', specialty: 'Pediatrics', available: true };
    * addDoctor(doctorData):
    */
  const addDoctor = async (newDoctor) => {
    try {
      const response = await fetch('http://localhost:3001/api/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDoctor),
      });
      const data = await response.json();
      setDoctors((prev) => [...prev, data]);
      console.log('New doctor added:', data);
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  // Add a new appointment
  /*
   * Usage: 
   * const patientData = { name: 'Alice Johnson', contact: '555-123-4567' };
   * addPatient(patientData):
   */
  const addAppointment = async (newAppointment) => {
    try {
      const response = await fetch('http://localhost:3001/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment),
      });
      const data = await response.json();
      setAppointments((prev) => [...prev, data]);
      console.log('New appointment added:', data);
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  //Fetch data when the component mounts
  useEffect(() => {
    fetchPatients();
    fetchDoctors();
    fetchAppointments();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Error" element={<Error />} />
          <Route path="Patient" element={<Patient />} />
          <Route path="Specialties" element={<Specialties />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
