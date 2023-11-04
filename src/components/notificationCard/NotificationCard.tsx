import React from 'react'
import styles from './NotificationCard.module.scss'
import { Grid, Typography } from '@mui/material';
import { BiMessageRoundedDetail } from 'react-icons/bi';


const NotificationCard = () => {
    return (
        <Grid className={styles.notificationCardContainer}>
            <BiMessageRoundedDetail fontSize={45} />
            <Typography textAlign={"center"} fontSize={10}>10</Typography>
        </Grid>
    )
}

export default NotificationCard;