import React from 'react';
import './App.css';
import {Header} from "../feauters/Header/Header";
import {Routes, Route, Navigate} from 'react-router-dom';
import {path} from "../common/enums/path";
import {Login} from "../feauters/Login/Login";
import {Calendar} from "../feauters/Calendar/Calendar";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to={path.CALENDAR}/>}/>
                <Route path={path.LOGIN} element={<Login/>}/>
                <Route path={path.CALENDAR} element={<Calendar/>}/>


                <Route/>
            </Routes>
        </div>
    );
}

export default App;
