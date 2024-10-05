import React from 'react'
import './Patients.css'
import '../App.js'

function Patient() {
    return (
        <div className='mainContainer'>
            <div className='patientInfoContainer'>
                <p className="patientName">Name: </p>
                <p className="patientData" id="patientData"></p>
                <p className="patientPhoneNumber">Phone Number: </p>
                <p className="patientDataNumber" id="patientDataNumber"></p>
            </div>
                <p className="appointmentTitle">Appointments: </p>
        </div>
    );
};

export default Patient;