import React from 'react'
import styles from './TimesheetTable.module.scss'
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { MdEdit, MdDelete } from 'react-icons/md';


export interface ITimesheetTable {
    emp_id: string;
    name: string;
    date: string;
    hours: string;
    remark: string;
}
const TimesheetTable = ({ data }: any) => {
    return (
        <TableContainer className={styles.timesheetTableContainer}>
            <Box display={"flex"} justifyContent={"right"}>
                <TextField placeholder='Search...' />
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>EMPLOYEE ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>DATE</TableCell>
                        <TableCell>HOURS</TableCell>
                        <TableCell>REMARK</TableCell>
                        <TableCell>ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: ITimesheetTable) => {
                        return (
                            <TableRow>
                                <TableCell>
                                    <Button variant="outlined" sx={{ backgroundColor: "#F8F9F9", color: "#111" }}>
                                        {item.emp_id}
                                    </Button>
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.hours}</TableCell>
                                <TableCell>{item.remark}</TableCell>
                                <TableCell>
                                    <MdEdit fontSize={25} cursor={"pointer"} color='#3EC9D6' />
                                    <MdDelete fontSize={25} cursor={"pointer"} color='#FF3A6E' />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TimesheetTable