import React from 'react';

import Button from '@mui/material/Button/Button';
import style from './GeneralButton.module.css'




type PropsType = {
    label: string;
    disabled?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

export const GeneralButton: React.FC<PropsType> = React.memo(
    ({ label, disabled, onClick, type, color, fullWidth }) => {
        return (
            <Button
                fullWidth={fullWidth}
                className={style.main}
                variant="contained"
                type={type || undefined}
                color={color || 'primary'}
                disabled={disabled}
                onClick={onClick || undefined}
            >
                {label}
            </Button>
        );
    },
);
