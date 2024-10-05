import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css"



function Header() {

    const [patientIds, setPatientIds] = useState([]);
    // Fetch all patient IDs
    const fetchPatientIds = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/patientIds');
            const patientIdsData = await response.json();
            setPatientIds(patientIdsData);
        } catch (error) {
            console.error('Error fetching patient IDs:', error);
        }
    };

    const navigate = useNavigate();
    const handleButtonClick = () => {
        var inputID = document.getElementById("id-input-field").value;
        fetchPatientIds();
        for (const id in patientIds) {
            if (inputID == id) {
                navigate("/Patient", { state: { key: id } });
                return
            }
        }
        navigate("/Error");


    }
    return (

        <div className='Header'>
            <h2 className='Title'>Foothills Hospital</h2>
            <input id="id-input-field" className="id_input" placeholder='Input Patient ID'></input>
            <button onClick={() => handleButtonClick()}>Search</button>
        </div>
    );
};

export default Header;