import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const specialityDropdown = (props) => { //props should be the speciality
    const [isOpen, setIsOpen] = useState(false);
    const doctorInformation = []; //fill with SQL command about each doctor with given speciality
    const navigate = useNavigate();

    return(
        <div>
            <button onClick = {() => setIsOpen(!isOpen)}>
                {props.name}
            </button>
            { isOpen && (
                <div>
                    {doctorInformation.map((doctor, index) => (
                        <div key= {index}>
                            <ul>
                                <li>{doctor.name}</li>
                                <li>The doctor is {doctor.available ? 'currently' : 'not'} available</li>
                                <li>
                                    {doctor.available ? 
                                    <button onClick = {(navigate("/doctor", {state: {key: doctor.id}}))}>
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


export default specialityDropdown;