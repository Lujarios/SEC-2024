import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import "./Layout.css"


const Layout = () => {


    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        var id = document.getElementById("id-input-field").value;

        navigate(route, { state: { key: id } });
    }



    return (

        <div className="nav-area">
            <header>
                <nav>
                    <ul className='List'>
                        <li className='ListItem'><input id="id-input-field" placeholder='Input Patient ID'></input></li>
                        <li><button onClick={() => handleButtonClick("/Patient")}>Search</button></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;