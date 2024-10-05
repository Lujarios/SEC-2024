import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MainPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainPage;