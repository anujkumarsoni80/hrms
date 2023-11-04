import React from 'react'
import styles from './Header.module.scss'
import { Grid, Typography } from '@mui/material'
import UserCard from '../userCard/UserCard'
import NotificationCard from '../notificationCard/NotificationCard'

const Header = () => {
    
    return (
        <Grid container className={styles.headerContainer}>
            <Grid item sm={4}>
                <UserCard />
            </Grid>
            <Grid item sm={4}>
                <NotificationCard />
            </Grid>
        </Grid>
    )
}

export default Header