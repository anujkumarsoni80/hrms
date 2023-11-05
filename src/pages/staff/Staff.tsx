import React, { useState } from 'react'
import styles from './Staff.module.scss'
import { Grid } from '@mui/material'
import Header from '../../components/header/Header'
import HeadingText from '../../components/headingText/HeadingText'
import data from '../../data/staffData/data.json'
import ProfileCard from '../../components/profileCard/ProfileCard'
import StaffModal from '../../components/staffModal/StaffModal'

const Staff = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open);
    const handleCloss = () => setOpen(false);

    return (
        <Grid className={styles.staffContainer}>
            <Header />
            <HeadingText
                heading={'Manage Staff'}
                onClick={handleClick}
            />
            <Grid container spacing={4}>
                {data.map((item) => {
                    return (
                        <Grid key={item.id} item sm={3}>
                            <ProfileCard
                                label={item.label}
                                img={item.img}
                                name={item.name}
                                email={item.email}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <StaffModal
                open={open}
                handleCloss={handleCloss}
            />
        </Grid>
    )
}

export default Staff