import React from 'react'
import styles from './ProfileDetailsCard.module.scss'
import { Box, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'
import { FiUser } from 'react-icons/fi';
import { ImSwitch } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        "id": 1,
        "icon": <FiUser fontSize={20} />,
        "label": "My Profile",
        "path": "/profile"
    },
    {
        "id": 2,
        "icon": <ImSwitch fontSize={20} />,
        "label": "Logout",
        "path": "/logout"
    }
]
const ProfileDetailsCard = () => {
    const navigation = useNavigate()
    return (
        <Grid className={styles.profileDetailsCardContainer}>
            {data.map((item) => {
                return (
                    <ListItemButton key={item.id} onClick={(() => navigation(item.path))}>
                        <Box>{item.icon}</Box>
                        <Typography >{item.label}</Typography>
                    </ListItemButton>
                )
            })}
        </Grid>
    )
}

export default ProfileDetailsCard