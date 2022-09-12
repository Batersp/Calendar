import React from 'react';
import './App.css';
import {Header} from "../feauters/Header/Header";
import {Navigate, Route, Routes} from 'react-router-dom';
import {path} from "../common/enums/path";
import {LoginComponent} from "../feauters/Login/Login";
import {Calendar} from "../feauters/Calendar/Calendar";
import {useAppSelector} from "../common/hooks/hooks";
import {selectIsLoading} from "../feauters/Login/selectors";
import {LinearProgress} from "@mui/material";
import {InfoSnackbar} from "../common/components/Snackbar/Snackbar";


function App() {
    const isLoading = useAppSelector(selectIsLoading)
    return (
        <div className="App">
            <Header/>

            {isLoading && <LinearProgress/>}
            <InfoSnackbar/>
            <Routes>
                <Route path='/' element={<Navigate to={path.CALENDAR}/>}/>
                <Route path={path.LOGIN} element={<LoginComponent/>}/>
                <Route path={path.CALENDAR} element={<Calendar/>}/>


                <Route/>
            </Routes>
        </div>
    );
}

export default App;
