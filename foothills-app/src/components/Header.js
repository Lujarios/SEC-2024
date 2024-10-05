import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css"

function Header() {
    const [ID, setID] = useState(-1);

    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        setID(document.getElementById("id-input-field").value);
        console.log(ID);
        navigate(route, { state: { key: ID } });
    }
    return (

        <div className='Header'>
            <h2 className='Title'>Foothills Hospital</h2>
            <input id="id-input-field" className="id_input" placeholder='Input Patient ID'></input>
            <button onClick={() => handleButtonClick("/Patient")}>Search</button>
        </div>
    );
};

export default Header;