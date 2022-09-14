import * as React from 'react';
import {useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {authSelectors} from "../../Login";
import {path} from "../../../common/enums/path";
import {Navigate} from 'react-router-dom'
import style from './CalendarInto.module.css'
import {fetchGuests} from "../event-reducer";


export const  CalendarInto = () => {

    const dispatch = useAppDispatch()

    const [value, setValue] = React.useState<Date | Dayjs | null>(() =>
        dayjs('2022-02-01T00:00'),
    );

    const auth = useAppSelector(authSelectors.selectIsAuth)


    useEffect(() => {
        dispatch(fetchGuests())
    })

    if(!auth) {
        return <Navigate to={(path.LOGIN)}/>
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                className={style.main}
                onChange={(newValue) => setValue(newValue)}
                value={value}
                renderInput={(params) => <TextField {...params} />}
                componentsProps={{
                    actionBar: {
                        actions: ['today'],
                    },
                }}

            />
        </LocalizationProvider>

    );
}




