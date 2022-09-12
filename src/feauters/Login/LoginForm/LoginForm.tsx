import React from 'react';
import {FormikProps, Form} from "formik";
import {LoginType} from "../Login";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {PasswordField} from "../../../common/components/Forms/PasswordField/PasswordField";
import {ProjectTextField} from "../../../common/components/Forms/TextField/TextField";
import {GeneralButton} from "../../../common/components/Buttons/GeneralButton";
import style from '../Login.module.css'


type PropsType = {
    formik: FormikProps<LoginType>;
};

export const LoginForm: React.FC<PropsType> = ({formik}) => {
    const { isValid, dirty, values, isSubmitting, handleChange} = {...formik}
    return (
        <Form>
            <FormGroup>
                <ProjectTextField name="name" label="Name" disabled={isSubmitting} />
                <PasswordField name="password" label="Password" disabled={isSubmitting} />
                <div className={style.checkbox}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="rememberMe"
                                onChange={handleChange}
                                checked={values.rememberMe}
                            />
                        }
                        label="Remember Me"
                    />
                </div>
                <GeneralButton
                    label="Sing Up"
                    disabled={!isValid || !dirty || isSubmitting}
                    type="submit"
                />
            </FormGroup>
        </Form>
    );
};
