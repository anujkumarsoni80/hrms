import React from 'react'
import styles from './InputField.module.scss'
import { Grid, TextField, Typography } from '@mui/material'

export interface IInputField {
    label: string;
    name: string;
    value: string | number;
    placeholder: string;
    onChange: any;
    type?: string;
}
const InputField = ({ type, label, name, value, placeholder, onChange }: IInputField) => {
    return (
        <Grid className={styles.inputFieldContainer}>
            <Typography>{label}</Typography>
            <TextField type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        </Grid>
    )
}

export default InputField