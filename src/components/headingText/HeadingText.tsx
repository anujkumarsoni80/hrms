import React from 'react'
import styles from './HeadingText.module.scss'
import { Box, Grid, Typography } from '@mui/material'
import { AiOutlinePlus } from 'react-icons/ai';


export interface IHeadingText {
    heading: string;
    onClick?: any;
}
const HeadingText = ({ heading, onClick }: IHeadingText) => {
    return (
        <Grid className={styles.headingTextContainer}>
            <Typography variant='h2' fontWeight={500} fontSize={25}>{heading}</Typography>
            <AiOutlinePlus onClick={onClick} fontSize={25} />
        </Grid>
    )
}

export default HeadingText;