import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from './Modal.module.css'
import {Formik} from "formik";
import {ModalForm} from "./ModalForm/ModalForm";
import {validateModalForm} from "./ModalForm/validateModalForm";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setEvent} from "../../../feauters/Calendar/event-reducer";
import {authSelectors} from "../../../feauters/Login";

const styles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export type ModalFormType = {
    nameEvent: string
    dataEvent: string
    guest: string
    author: string | null
}

type PropsType = {
    open: boolean
    callback: (value: boolean) => void
}

export const  BasicModal: React.FC<PropsType> = ({open, callback}) => {
    const handleClose = () => callback(false);

    const dispatch = useAppDispatch()
    const author = useAppSelector(authSelectors.selectUserName)

    const onSubmitHandler = (values: ModalFormType) => {
        dispatch(setEvent({event: values}))
        handleClose()
    }

    const initState: ModalFormType = {nameEvent: '', dataEvent: '', guest: '', author: author}

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles}>

                    <div className={style.main}>
                            <Typography variant="h4" className={style.title}>
                                Add Event
                            </Typography>
                            <Formik
                                initialValues={initState}
                                validationSchema={validateModalForm}
                                onSubmit={onSubmitHandler}
                                validateOnMount={false}
                            >
                                {formik => <ModalForm formik={formik}/>}
                            </Formik>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
