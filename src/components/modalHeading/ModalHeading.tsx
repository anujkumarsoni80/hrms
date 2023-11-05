import React from 'react'
import styles from './ModalHeading.module.scss'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { RxCross2 } from 'react-icons/rx'

export interface IModalHeading {
    heading: string;
    onClick: () => void;
}
const ModalHeading = ({ heading, onClick }: IModalHeading) => {
    return (
        <Grid className={styles.modalHeadContainer}>
            <Box display={"flex"} justifyContent={"space-between"} >
                <Typography variant='h5' fontWeight={500} fontSize={20}>{heading}</Typography>
                <RxCross2 color='#111' fontSize={22} cursor={"pointer"} onClick={onClick} />
            </Box>
            <Divider sx={{ marginBlockStart: 2, marginBlockEnd: 3 }} />
        </Grid>
    )
}

export default ModalHeading