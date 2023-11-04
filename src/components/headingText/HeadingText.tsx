import React from 'react'
import styles from './HeadingText.module.scss'
import { Grid, Typography } from '@mui/material'

export interface IHeadingText {
    heading: string;
    text?: string;
}
const HeadingText = ({ heading, text }: IHeadingText) => {
    return (
        <Grid className={styles.headingTextContainer}>
            <Typography variant='h2' fontWeight={600} fontSize={28}>{heading}</Typography>
            <Typography fontWeight={500} fontSize={18}>{text}</Typography>
        </Grid>
    )
}

export default HeadingText;