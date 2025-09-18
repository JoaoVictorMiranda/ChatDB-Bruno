import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from "./pages/Login/Index.jsx";
import Registrar from "./pages/Registrar/Index.jsx";


export function Navegar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login />} />
                <Route path={'/registrar'} element={<Registrar />} />
            </Routes>
        </BrowserRouter>
    )
}