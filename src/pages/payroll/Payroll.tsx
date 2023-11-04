import React from 'react'
import styles from './Payroll.module.scss'
import { Grid } from '@mui/material'
import Header from '../../components/header/Header'
import HeadingText from '../../components/headingText/HeadingText'
import PayrollTable from '../../components/tables/payrollTable/PayrollTable'
import data from '../../data/payrollData/data.json'

const Payroll = () => {
  console.log(data.payrollData, "data")
  return (
    <Grid className={styles.payrollContainer}>
      <Header />
      <HeadingText
        heading={'Manage Employee Salary'}
      />
      <PayrollTable
        data={data.payrollData}
      />
    </Grid>
  )
}

export default Payroll