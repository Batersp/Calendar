import React from 'react';
import {authSelectors} from "../Login";
import {path} from "../../common/enums/path";
import {Navigate} from 'react-router-dom'
import {useAppSelector} from "../../common/hooks/hooks";


export const Calendar = () => {

    const auth = useAppSelector(authSelectors.selectIsAuth)
    if(!auth) {
        return <Navigate to={(path.LOGIN)}/>
    }
    return (
        <div>
            CALENDAR
        </div>
    );
};

