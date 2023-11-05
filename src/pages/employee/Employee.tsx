import React from 'react'
import styles from './Employee.module.scss'
import { Grid } from '@mui/material'
import Header from '../../components/header/Header'
import HeadingText from '../../components/headingText/HeadingText'
import EmployeeTable from '../../components/tables/employeeTable/EmployeeTable'
import data from '../../data/employeeData/data.json'
import { useNavigate } from 'react-router-dom'

const Employee = () => {
    const navigation = useNavigate();
    return (
        <Grid className={styles.employeeContainer}>
            <Header />
            <HeadingText
                heading={'Manage Employee'}
                onClick={(() => navigation("/employee/create"))}
            />
            <EmployeeTable
                data={data.tableData}
            />
        </Grid>
    )
}

export default Employee