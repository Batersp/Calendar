import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import React, {ChangeEvent, SetStateAction} from "react";
import {Dayjs} from "dayjs";
import {useField} from "formik";
import {ModalFormType} from "../../Modal/Modal";
import {formatDate} from "../../../../utils/date";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import FormControl from "@mui/material/FormControl";

type PropsType = {
    label: string
    name: string
    values: ModalFormType
    setValues: (e: SetStateAction<ModalFormType>) => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const DataPicker: React.FC<PropsType> = ({name, label, setValues, values}) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [field, meta] = useField(name);
    return (
        <FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={label}
                    value={value}
                    onChange={(newValue) => {
                        if (newValue) {
                            setValues({...values, dataEvent: formatDate(newValue?.toDate())})
                        }

                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}

                />
            </LocalizationProvider>
            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
        </FormControl>
    )
}



