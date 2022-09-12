import React from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import { useField } from 'formik';
import style from './TextField.module.css'



type PropsType = {
    name: string;
    label: string;
    disabled?: boolean;
};

export const ProjectTextField: React.FC<PropsType> = ({
                                                          label,
                                                          name,
                                                          disabled,
                                                      }) => {
    const [field, meta] = useField(name);

    return (
        <FormControl fullWidth variant="standard" className={style.main}>
            <InputLabel>{label}</InputLabel>
            <Input margin="dense" {...field} name={name} disabled={disabled} />
            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
        </FormControl>
    );
};
