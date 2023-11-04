import React from 'react'
import styles from './viewScreen.module.scss'
import { Box, Divider, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'
import ViewRoutes from '../viewRoutes/ViewRoutes'
import { useNavigate } from 'react-router-dom'
import { RiDashboardFill } from 'react-icons/ri';
import { AiOutlineUsergroupDelete, AiOutlineUser, AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineStickyNote2 } from 'react-icons/md';


const ViewScreen = () => {
    const navigation = useNavigate()
    const menuData = [
        {
            "id": 1,
            "icon": <RiDashboardFill fontSize={22} />,
            "label": "Dashboard",
            "path": "/"
        },
        {
            "id": 2,
            "icon": <AiOutlineUsergroupDelete fontSize={22} />,
            "label": "Staff",
            "path": "/staff"
        },
        {
            "id": 3,
            "icon": <AiOutlineUser fontSize={22} />,
            "label": "Employee",
            "path": "/employee"
        },
        {
            "id": 4,
            "icon": <MdOutlineStickyNote2 fontSize={22} />,
            "label": "Payroll",
            "path": "/payroll"
        },
        {
            "id": 5,
            "icon": <AiOutlineClockCircle fontSize={22} />,
            "label": "Timesheet",
            "path": "/timesheet"
        }
    ]
    return (
        <Grid container className={styles.viewScreenContainer}>
            <Grid item sm={2} className={styles.viewMenuContainer}>
                <Box>
                    <Typography variant='h2' fontWeight={600} fontSize={35}>@HRMS!</Typography>
                </Box>
                <Divider />
                <List>
                    {menuData.map((item) => {
                        return (
                            <ListItem key={item.id} onClick={(() => navigation(item.path))}>
                                <ListItemButton>
                                    {item.icon}
                                    <Typography variant='h5' fontSize={18} fontWeight={500} >{item.label}</Typography>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
            <Grid item sm={10} className={styles.viewRouteContainer}>
                <ViewRoutes />
            </Grid>
        </Grid>
    )
}

export default ViewScreen;