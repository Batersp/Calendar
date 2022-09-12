import React from 'react';
import style from './Login.module.css'
import {Paper, Typography} from "@mui/material";
import {Formik, FormikHelpers} from 'formik';
import {LoginForm} from "./LoginForm/LoginForm";
import {validateLogin} from "./validateLogin";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {Login} from "./auth-reducer";
import {authSelectors} from "./index";
import {Navigate} from "react-router-dom";
import {path} from "../../common/enums/path";

export type LoginType = {
    name: string
    password: string
    rememberMe: boolean
}

export const LoginComponent = () => {

    const dispatch = useAppDispatch()
    const auth = useAppSelector(authSelectors.selectIsAuth)

    const onSubmitHandler = async (values: LoginType, {setSubmitting, resetForm}: FormikHelpers<LoginType>) => {
        console.log(values)
        await dispatch(Login({password: values.password, userName: values.name}))
        setSubmitting(false)
        resetForm()
    }
    if(auth) {
        return <Navigate to={(path.CALENDAR)}/>
    }
    return (
        <div className={style.main}>
            <Paper elevation={3} className={style.paper}>
                <Typography variant="h4" className={style.title}>
                    Sing In
                </Typography>
                <Formik
                    initialValues={{name: '', password: '', rememberMe: false}}
                    validationSchema={validateLogin}
                    onSubmit={onSubmitHandler}
                    validateOnMount={false}
                >
                    {formik => <LoginForm formik={formik}/>}
                </Formik>
            </Paper>
        </div>
    );
};

