import React from 'react'
import styles from './CreateEmployee.module.scss'
import { Grid } from '@mui/material'
import Header from '../../components/header/Header'
import HeadingText from '../../components/headingText/HeadingText'
import CompanyDetails from '../../components/companyDetails/CompanyDetails'
import Document from '../../components/document/Document'
import SimpleButton from '../../components/simleButton/SimpleButton'
import BankDetails from '../../components/bankDetails/BankDetails'
import PersonalDetail from '../../components/personalDetail/PersonalDetail'

const CreateEmployee = () => {
    return (
        <Grid className={styles.createEmployeeContainer}>
            <Header />
            <HeadingText
                heading={'Create Employee'}
            />
            <Grid container className={styles.createEmployee}>
                <Grid item sm={6}>
                    <PersonalDetail />
                </Grid>
                <Grid item sm={6}>
                    <CompanyDetails />
                </Grid>
                <Grid item sm={6}>
                    <Document />
                </Grid>
                <Grid item sm={6}>
                    <BankDetails />
                </Grid>
            </Grid>
            <SimpleButton
                name={'Create'}
                color={''}
                bgColor={''}
                onClick={undefined}
            />
        </Grid>
    )
}

export default CreateEmployee