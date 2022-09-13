import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import {Dayjs} from "dayjs";
import {useField} from "formik";
import {SelectChangeEvent} from "@mui/material/Select";

type PropsType = {
    name: string
    value: string
    handleChange: (value: number | null, keyboardInputValue?: string | undefined) => void
}

export const DataPicker: React.FC<PropsType> = ({name, value, handleChange}) => {
    /*const [value, setValue] = React.useState<Dayjs | null>(null);*/
    const [field, meta] = useField(name);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                {...field}

                label="Basic example"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

/*(newValue) => {
    setValue(newValue);
}*/

