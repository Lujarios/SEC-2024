import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Patients.css'
import '../App.js'

function Patient() {
    const [patients, setPatient] = useState([]);

    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        navigate(route);
    }

    const fetchPatientById = async () => {
        try {
            const id = 1;
            const response = await fetch(`http://localhost:3001/api/patients/${id}`);
            const patientData = await response.json();
            setPatient(patientData);

        } catch (error) {
            console.error('Error fetching patient by ID:', error);
        }
    };

    const setPatientData = async (id) => {
        let nameP = document.getElementById("patientData");

        nameP.innerHTML = '';

        patients.search.array.forEach(patient => {
            nameP.textContent = patient.name;
        });
    };

    const setPatientAppointments = async (id) => {
        let data = await fetchPatientById(id);
        let parsedData = JSON.parse(data);
        let nameP = document.getElementById("patientData");
        let appointmentList = document.getElementById('appointmentList');

        appointmentList.innerHTML = '';

        parsedData.search.array.forEach(appointment => {
            const listItem = document.createElement('li');
            listItem.classList.add("appointment-list-item");

            const appointmentID = document.createElement("p");
            appointmentID.textContent = appointment.appointment_id;

            const patientID = document.createElement("p");
            patientID.textContent = appointment.patient_id;

            listItem.appendChild(appointmentID);
            listItem.appendChild(patientID);
            appointmentList.appendChild(listItem);
        });
    };

    return (
        <div className='mainContainer'>
            <div className='patientInfoContainer'>
                <p className="patientName">Name: </p>
                <script>
                    fetchPatientById();
                    setPatientAppointments();
                </script>
                <p className="patientData" id="patientData"></p>
                <p className="patientPhoneNumber">Phone Number: </p>
                <p className="patientDataNumber" id="patientDataNumber"></p>
            </div>
            <div className="patientAppointmentContainer">
                <p className="appointmentTitle">Appointments: </p><br></br>
                <li className="appointmentList" id="appointmentList"></li>
                <button className="appointmentButton" onClick={() => handleButtonClick("/Specialists")}>Add appointment</button>
            </div>
        </div>
    );


};
export default Patient;