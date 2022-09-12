import React from 'react';
import style from './Login.module.css'
import {Paper, Typography} from "@mui/material";
import { Formik } from 'formik';
import {LoginForm} from "./LoginForm/LoginForm";
import {validateLogin} from "./validateLogin";

export type LoginType = {
    name: string
    password: string
    rememberMe: boolean
}

export const Login = () => {

    const onSubmitHandler = (values: LoginType) => {
        console.log(values)
    }

    return (
        <div className={style.main}>
            <Paper elevation={3} className={style.paper} >
                <Typography variant="h4" className={style.title}>
                    Sing In
                </Typography>
                <Formik
                    initialValues={{ name: '', password: '', rememberMe: false }}
                    validationSchema={validateLogin}
                    onSubmit={onSubmitHandler}
                    validateOnMount={false}
                >
                    {formik => <LoginForm formik={formik} />}
                </Formik>
            </Paper>
        </div>
    );
};

