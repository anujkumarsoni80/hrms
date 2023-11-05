import React from 'react'
import styles from './SimpleButton.module.scss'
import { Button, Grid } from '@mui/material'

export interface ISimpleButton {
    name: string;
    color: string;
    bgColor: string;
    onClick: any;

}
const SimpleButton = ({ name, color, bgColor, onClick }: ISimpleButton) => {
    return (
        <Grid>
            <Button style={{ color: color, backgroundColor: bgColor }} onClick={onClick} variant="contained">
                {name}
            </Button>
        </Grid>
    )
}

export default SimpleButton