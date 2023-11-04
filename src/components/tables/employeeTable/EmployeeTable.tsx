import React from 'react'
import styles from './EmployeeTable.module.scss'
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { MdEdit, MdDelete } from 'react-icons/md';

export interface IEmployeeTable {
    emp_id: string;
    name: string;
    email: string;
    branch: string;
    department: string;
    designation: string;
    dateOfJoin: string;
}
const EmployeeTable = ({ data }: any) => {
    return (
        <TableContainer className={styles.employeeTableContainer}>
            <Grid display={"flex"} justifyContent={"right"}>
                <TextField placeholder='Search...' />
            </Grid>
            <Table>
                <TableHead className={styles.topTableHead}>
                </TableHead>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#F8F9F9" }}>
                        <TableCell>EMPLOYEE ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>BRANCH</TableCell>
                        <TableCell>DEPARTMENT</TableCell>
                        <TableCell>DESIGNATION</TableCell>
                        <TableCell>DATE OF JOINING	</TableCell>
                        <TableCell>ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={styles.tableBody}>
                    {data.map((item: IEmployeeTable) => {
                        return (
                            <TableRow>
                                <TableCell>
                                    <Button variant="outlined" sx={{ backgroundColor: "#F8F9F9", color: "#111" }}>
                                        {item.emp_id}
                                    </Button>
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.branch}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>{item.designation}</TableCell>
                                <TableCell>{item.dateOfJoin}</TableCell>
                                <TableCell className={styles.tableAction}>
                                    <MdEdit fontSize={25} />
                                    <MdDelete fontSize={25} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EmployeeTable