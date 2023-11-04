import React from 'react'
import styles from './meetingSchedule.module.scss'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export interface IMeetingSchedule {
    title: string;
    date: string;
    time: string;
}
const MeetingSchedule = ({ data }: any) => {
    return (
        <TableContainer className={styles.meetingScheduleContainer}>
            <Table>
                <TableHead>
                    <TableCell style={{ textTransform: "uppercase" }}>Meeting schedule</TableCell>
                </TableHead>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#F8F9F9" }}>
                        <TableCell>TITLE</TableCell>
                        <TableCell>DATE</TableCell>
                        <TableCell>TIME</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: IMeetingSchedule) => {
                        return (
                            <TableRow>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.time}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MeetingSchedule