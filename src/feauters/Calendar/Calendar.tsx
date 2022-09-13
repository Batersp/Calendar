import React, {useState} from 'react';
import style from './Calendar.module.css'
import {CalendarInto} from "./CalendarInto/CalendarInto";
import Button from "@mui/material/Button/Button";
import {BasicModal} from "../../common/components/Modal/Modal";

export const Calendar = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <div className={style.main}>
            <CalendarInto/>
            <Button onClick={() => setOpenModal(true)} fullWidth variant="contained">Добавить событие</Button>
            <BasicModal open={openModal} callback={setOpenModal}/>
        </div>
    );
};

