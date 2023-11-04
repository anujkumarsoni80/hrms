import React from 'react'
import styles from './PayrollTable.module.scss'
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { GrFormView } from 'react-icons/gr';


export interface IPayrollTable {
    emp_id: number;
    name: string;
    payroll_type: string;
    salary: string;
    net_salary: string;
}
const PayrollTable = ({ data }: any) => {
    return (
        <TableContainer className={styles.payrollTableContainer}>
            <Box display={"flex"} justifyContent={"right"}>
                <TextField placeholder='Search...' />
            </Box>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#F8F9F9" }}>
                        <TableCell>EMPLOYEE ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>PAYROLL TYPE</TableCell>
                        <TableCell>SALARY</TableCell>
                        <TableCell>NET SALARY</TableCell>
                        <TableCell>ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: IPayrollTable) => {
                        return (
                            <TableRow>
                                <TableCell >
                                    <Button variant="outlined" sx={{ backgroundColor: "#F8F9F9", color: "#111" }}>
                                        {item.emp_id}
                                    </Button>
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.payroll_type}</TableCell>
                                <TableCell>{item.salary}</TableCell>
                                <TableCell>{item.net_salary}</TableCell>
                                <TableCell>
                                    <GrFormView fontSize={28} style={{ cursor: "pointer", color: "yellow" }} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default PayrollTable