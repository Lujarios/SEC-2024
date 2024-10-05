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


        <ul className='List'>
            <li className='ListItem'><input id="id-input-field" placeholder='Input Patient ID'></input></li>
            <li><button onClick={() => handleButtonClick("/Patient")}>Search</button></li>
            <li><a href="/Patient">Test</a></li>
        </ul>
    );
};

export default Header;