import React from 'react'
import styles from './Employee.module.scss'
import { Grid } from '@mui/material'
import Header from '../../components/header/Header'
import HeadingText from '../../components/headingText/HeadingText'
import EmployeeTable from '../../components/tables/employeeTable/EmployeeTable'
import data from '../../data/employeeData/data.json'

const Employee = () => {
    return (
        <Grid className={styles.employeeContainer}>
            <Header />
            <HeadingText
                heading={'Manage Employee'}
            />
            <EmployeeTable
                data={data.tableData}
            />
        </Grid>
    )
}

export default Employee