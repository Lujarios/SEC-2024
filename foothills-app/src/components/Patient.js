import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Patients.css'
import '../App.js'

function Patient() {
    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        navigate(route);
    }

    return (
        <div className='mainContainer'>
            <div className='patientInfoContainer'>
                <p className="patientName">Name: </p>
                <p className="patientData" id="patientData"></p>
                <p className="patientPhoneNumber">Phone Number: </p>
                <p className="patientDataNumber" id="patientDataNumber"></p>
            </div>
            <p className="appointmentTitle">Appointments: </p>
            <button onClick={() => handleButtonClick("/Specialists")}>Add appointment</button>
        </div>
    );
};

export default Patient;