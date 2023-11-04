import React from 'react'
import styles from './ViewCard.module.scss'
import { Box, Grid, Typography } from '@mui/material'

export interface IViewCard {
    image?: any;
    label: string;
    title: string;
    total: number;
    bgColor?: string;
}
const ViewCard = ({ image, label, title, total, bgColor }: IViewCard) => {
    return (
        <Grid style={{ backgroundColor: bgColor }} className={styles.viewCardContainer}>
            <Box>
                {image}
                <Box>
                    <span>{label}</span>
                    <Typography>{title}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography>{total}</Typography>
            </Box>
        </Grid>
    )
}

export default ViewCard;