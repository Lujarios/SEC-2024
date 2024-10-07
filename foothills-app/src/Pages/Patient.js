import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Patients.css'
import '../App.js'

function Patient() {
    const [patient, setPatient] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        navigate(route);
    }

    const fetchPatientById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/patients/${id}`);
            const patientData = await response.json();
            setPatient(patientData[0]);
        } catch (error) {
            console.error('Error fetching patient by ID:', error);
        }
    };

    const fetchAppointmentsById = async (id) => {
        try {
          const response = await fetch(`http://localhost:3001/api/appointments/${id}`);
          const appointmentsData = await response.json();
          setAppointments(appointmentsData);
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
    };

    useEffect(() => { //HARDCODED ATM
        fetchPatientById(2); 
        fetchAppointmentsById(2);
    }, []);

    return (
        <div className='mainContainer'>
            <div className='patientInfoContainer'>
                <p className="patientName">Name: {patient.name}</p>
                <p className="patientPhoneNumber">Phone Number: {patient.contact}</p>
            </div>

            <div className="patientAppointmentContainer">
                <p className="appointmentTitle">Appointments: </p>
                <ul className="appointmentList">
                    {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                            <li key={index} className="appointment-list-item">
                                <p>Appointment ID: {appointment.appointment_id}</p>
                                <p>Doctor ID: {appointment.doctor_id}</p>
                                <p>Start Time: {appointment.start_time}</p>
                                <p>End Time: {appointment.end_time}</p>
                            </li>
                        ))
                    ) : (
                        <p>No appointments found</p>
                    )}
                </ul>
                <button className="appointmentButton" onClick={() => handleButtonClick("/Specialties")}>
                    Add appointment
                </button>
            </div>
        </div>
    );
};

export default Patient;
