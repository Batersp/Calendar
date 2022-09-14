import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from './Modal.module.css'
import {Paper} from "@mui/material";
import {Formik} from "formik";
import {ModalForm} from "./ModalForm/ModalForm";
import {validateModalForm} from "./ModalForm/validateModalForm";

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
}

type PropsType = {
    open: boolean
    callback: (value: boolean) => void
}

export const  BasicModal: React.FC<PropsType> = ({open, callback}) => {
    const handleClose = () => callback(false);

    const onSubmitHandler = (values: ModalFormType) => {
        console.log(values)
    }

    const initState: ModalFormType = {nameEvent: '', dataEvent: '', guest: ''}

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
