import React from 'react'
import styles from './ProfileCard.module.scss'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { PiDotsThreeVerticalBold } from 'react-icons/pi';

export interface IProfileCard {
    label: string;
    img: string;
    name: string;
    email: string;
}
const ProfileCard = ({ label, img, name, email }: IProfileCard) => {
    return (
        <Card className={styles.profileCardContainer}>
            <CardContent className={styles.profileHeading}>
                <Typography fontSize={14} sx={{backgroundColor:"#F8F9F9", paddingBlock:1, paddingInline:2}}>{label}</Typography>
                <PiDotsThreeVerticalBold style={{ cursor: "pointer" }} fontWeight={600} />
            </CardContent>
            <CardMedia className={styles.profileImage}>
                <img src={img} alt='img' />
            </CardMedia>
            <CardContent>
                <Typography textAlign={"center"} variant='h4' fontWeight={600} fontSize={20}>{name}</Typography>
                <Typography textAlign={"center"}>{email}</Typography>
            </CardContent>
        </Card>
    )
}

export default ProfileCard