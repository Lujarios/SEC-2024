import React from 'react'
import { useNavigate } from 'react-router-dom';



const Layout = () => {
    const navigate = useNavigate();
    function handleButtonClick(route) {
        id = document.getElementById("id-input-field")

        navigate(route, { state: { key: id } })
    }

    return (

        <div className="nav-area">
            <header>
                <nav>
                    <ul>
                        <ui><img src="foothills-app\public\logo.png" alt="Foothills logo" /></ui>
                        <ui><input id="id-input-field" ></input>Input patient ID</ui>
                        <ui><button onClick={handleButtonClick("/patient-info")}>Search</button></ui>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Header;