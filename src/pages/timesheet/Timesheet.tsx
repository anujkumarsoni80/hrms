import React from 'react'
import styles from './Timesheet.module.scss'
import { Grid } from '@mui/material'
import Header from '../../components/header/Header'
import HeadingText from '../../components/headingText/HeadingText'
import TimesheetTable from '../../components/tables/timesheetTable/TimesheetTable'
import data from '../../data/timesheetData/data.json'

const Timesheet = () => {
  return (
    <Grid className={styles.timesheetContainer}>
      <Header />
      <HeadingText
        heading={'Manage Timesheet'}
      />
      <TimesheetTable
        data={data.timesheetData}
      />

    </Grid>
  )
}

export default Timesheet