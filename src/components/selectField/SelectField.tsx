import React from 'react'
import styles from './SelectField.module.scss'
import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'

export interface ISelectField {
    label: string;
    value: number;
    onChange: any;
}

const SelectField = ({ label, value, onChange }: ISelectField) => {
    return (
        <Grid>
            <FormControl>
                <Typography>{label}</Typography>
                <Select
                    value={value}
                    onChange={onChange}
                >
                    <MenuItem value={0}>One</MenuItem>
                    <MenuItem value={1}>Two</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SelectField