import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const SpecialtyDropdown = (props) => { //props should be the speciality
    
    const [doctors, setDoctors] = useState(0);
    const fetchDoctorsBySpecialty = async (specialty) => {
        try {
          const response = await fetch(`http://localhost:3001/api/doctors/specialty/${specialty}`);
          const doctorInformation = await response.json();
          setDoctors(doctorInformation);
        } catch (error) {
          console.error('Error fetching doctors by specialty:', error);
        }
      };
    
    fetchDoctorsBySpecialty(props.name);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    return(
        <div>
            <button onClick = {() => setIsOpen(!isOpen)}>
                {props.name}
            </button>
            { isOpen && (
                <div>
                    {doctors.map((doctor, index) => (
                        <div key= {index}>
                            <ul>
                                <li>{doctor.name}</li>
                                <li>The doctor is {doctor.available ? 'currently' : 'not'} available</li>
                                <li>
                                    {doctor.available ? 
                                    <button onClick = {(() => navigate("/Doctor", {state: {key: doctor.id}}))}>
                                        View Appointments
                                    </button> :
                                    <p></p>
                                    }
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default SpecialtyDropdown;