import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {useAppSelector} from "../../../common/hooks/hooks";
import {authSelectors} from "../../Login";
import {path} from "../../../common/enums/path";
import {Navigate} from 'react-router-dom'
import style from './CalendarInto.module.css'
import Button from "@mui/material/Button/Button";




export const  CalendarInto = () => {
    const [value, setValue] = React.useState<Date | Dayjs | null>(() =>
        dayjs('2022-02-01T00:00'),
    );

    const auth = useAppSelector(authSelectors.selectIsAuth)

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




