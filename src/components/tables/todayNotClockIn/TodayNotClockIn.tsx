import React from 'react'
import styles from './TodayNotClockIn.module.scss'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export interface ITodayNotClockIn {
    name: string;
    status: string;
}
const TodayNotClockIn = ({ data }: any) => {
    return (
        <TableContainer className={styles.todayNotClockInContainer}>
            <Table>
                <TableHead>
                    <TableCell style={{textTransform:"uppercase"}}>Today's Not Clock In</TableCell>
                </TableHead>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#F8F9F9" }}>
                        <TableCell>NAME</TableCell>
                        <TableCell>STATUS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: ITodayNotClockIn) => {
                        return (
                            <TableRow>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.status}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TodayNotClockIn