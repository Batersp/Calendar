import React from 'react';
import {useSelector} from "react-redux";
import {authSelectors} from "../Login";
import {path} from "../../common/enums/path";
import {Navigate} from 'react-router-dom'


export const Calendar = () => {

    const auth = useSelector(authSelectors.selectIsAuth)
    if(!auth) {
        return <Navigate to={(path.LOGIN)}/>
    }
    return (
        <div>
            CALENDAR
        </div>
    );
};

