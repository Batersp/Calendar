import React from 'react';
import style from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {selectIsAuth, selectUserName} from "../Login/selectors";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Logout} from "../Login/auth-reducer";

export const Header = () => {
    const dispatch = useAppDispatch()
    const name = useAppSelector(selectUserName)
    const isAuth = useAppSelector(selectIsAuth)

    return (
        <div className={style.main}>
            {name && <div className={style.name}>{name}</div>}
            {isAuth
            ?
                    <ExitToAppOutlinedIcon
                        className={style.icon}
                        color={"primary"}
                        fontSize={"large"}
                        onClick={() => dispatch(Logout())}
                    />

                : <div className={style.login}>Login</div>
            }
        </div>
    );
};

