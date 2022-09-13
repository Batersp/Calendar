import React, {ChangeEvent} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useField} from "formik";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";

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
    const [field, meta] = useField(name);
    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel>Age</InputLabel>
                <Select
                    {...field}
                    name={name}
                   /* labelId="demo-simple-select-label"
                    id="demo-simple-select"*/
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
            </FormControl>
        </Box>
    );
};

/*id="demo-simple-select-label"*/

