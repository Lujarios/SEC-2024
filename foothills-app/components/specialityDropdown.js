import React, {useState} from 'react';

const specialityDropdown = (props) => { //props should be the speciality
    const [isOpen, setIsOpen] = useState(false);
    const doctorInformation = []; //fill with SQL command about each doctor


    return(
        <div>
            <button onClick = {() => setIsOpen(!isOpen)}>
                {props}
            </button>
            { isOpen && (
                <div>
                    {doctorInformation.map((item, index) => (
                        <div key= {index}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default specialityDropdown;