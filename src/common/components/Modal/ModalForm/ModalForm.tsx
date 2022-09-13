import React from 'react';
import {FormikProps} from "formik";
import {ModalFormType} from "../Modal";
import {ProjectTextField} from "../../Forms/TextField/TextField";

type PropsType = {
    formik: FormikProps<ModalFormType>;
};

export const ModalForm: React.FC<PropsType> = ({formik}) => {
    return (
        <div>
            <ProjectTextField name={'nameEvent'} label='Название события'/>
        </div>
    );
};
