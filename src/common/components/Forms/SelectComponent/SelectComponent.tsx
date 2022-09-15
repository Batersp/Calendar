import React, {ChangeEvent} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useField} from "formik";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import {useAppSelector} from "../../../hooks/hooks";
import {eventSelectors} from "../../../../feauters/Calendar";
import {authSelectors} from "../../../../feauters/Login";



type PropsType = {
    value: string
    name: string
    label: string
    handleChange: (e: SelectChangeEvent<string>) => void
}

export const SelectComponent: React.FC<PropsType> = ({name, label, handleChange, value}) => {
    /* const [age, setAge] = React.useState('');
     const [field, meta] = useField(name);*/
    /*  const handleChange = (event: SelectChangeEvent) => {
          setAge(event.target.value as string);
      };*/
    const user = useAppSelector(authSelectors.selectUserName)
    const guests = useAppSelector(eventSelectors.selectGuests)
    const [field, meta] = useField(name);
    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    {...field}
                    name={name}
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {guests.filter(el => el.userName !== user).map((el, index) => {
                        if(el.userName) return <MenuItem key={index} value={el.userName}>{el.userName}</MenuItem>
                    })}
                </Select>
                {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
            </FormControl>
        </Box>
    );
};

/*id="demo-simple-select-label"*/

