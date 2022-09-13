import React from 'react';
import {Form, FormikProps} from "formik";
import {ModalFormType} from "../Modal";
import {ProjectTextField} from "../../Forms/TextField/TextField";
import {DataPicker} from "../../Forms/DataPicker/DataPicker";
import {SelectComponent} from "../../Forms/SelectComponent/SelectComponent";
import style from './ModalForm.module.css'
import {GeneralButton} from "../../Buttons/GeneralButton";
import {FormGroup} from "@mui/material";


type PropsType = {
    formik: FormikProps<ModalFormType>;
};

export const ModalForm: React.FC<PropsType> = ({formik}) => {
    const {isValid, dirty, isSubmitting, handleChange, values} = formik
    return (
        <Form>
            <FormGroup>
        <div className={style.main}>
            <div className={style.nameEvent}>
                <ProjectTextField name='nameEvent' label='Название события'/>
            </div>

            <div className={style.dataPicker}>
                <DataPicker handleChange={handleChange} value={values.dataEvent} name='dataEvent'/>
            </div>

            <div className={style.select}>
                <SelectComponent value={values.guest} handleChange={handleChange} name='guest' label='Guest'/>
            </div>

            <div className={style.btn}>
                <GeneralButton disabled={!isValid || !dirty || isSubmitting}
                               type="submit" label='Add event'/>
            </div>

        </div>
            </FormGroup>
        </Form>
    );
};
