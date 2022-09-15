import React from 'react';
import style from './Events.module.css'
import {useAppSelector} from "../../../common/hooks/hooks";
import {selectEvents} from "../selectors";
import {authSelectors} from "../../Login";

export const Events = () => {

    const user = useAppSelector(authSelectors.selectUserName)
    const events = useAppSelector(selectEvents).filter(el => el.author !== user)

    return (
        <div className={style.main}>
            {events.map((el, index) => {
                return <div className={style.event}>
                    {`Date: ${el.dataEvent}, Message: ${el.nameEvent}, author: ${el.author}`}
                </div>
            })}
        </div>
    );
};

