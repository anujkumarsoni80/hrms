import React, { useState } from 'react'
import styles from './UserCard.module.scss'
import { Grid, Typography } from '@mui/material'
import { RxAvatar } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ProfileDetailsCard from '../profileDetailsCard/ProfileDetailsCard';


const ProfileCard = () => {
    const [open, setOpen] = useState(false)
    const handleProfile = () => {
        setOpen(!open)
    }
    return (
        <Grid className={styles.profileCardContainer}>
            <RxAvatar fontSize={45} />
            <Typography>hi, Anuj Kumar</Typography>
            <MdKeyboardArrowDown onClick={handleProfile} fontSize={25} />
            <Grid>
                {open && <ProfileDetailsCard />}
            </Grid>
        </Grid>
    )
}

export default ProfileCard;