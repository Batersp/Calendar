import React, {useEffect} from 'react';
import style from './Events.module.css'
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {selectEvents} from "../selectors";
import {authSelectors} from "../../Login";
import {fetchEvents} from "../event-reducer";

export const Events = () => {

    const user = useAppSelector(authSelectors.selectUserName)
    const events = useAppSelector(selectEvents).filter(el => el.author !== user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchEvents({userName: user}))
    },[])

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

