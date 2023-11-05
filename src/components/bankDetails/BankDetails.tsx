import React from 'react'
import styles from './BankDetails.module.scss'
import { Grid, Typography, Divider } from '@mui/material'
import InputField from '../inputField/InputField'
import SelectField from '../selectField/SelectField'

const BankDetails = () => {
    return (
        <Grid className={styles.bankDetailContainer}>
            <Typography variant='h5' fontSize={20} fontWeight={500}>Bank Account Detail</Typography>
            <Divider />
            <Grid container className={styles.bankDetail}>
                <Grid item sm={6}>
                    <InputField
                        label={'Account Holder Name'}
                        name={'name'}
                        value={''}
                        placeholder={'Enter Account Holder Name'}
                        onChange={undefined}
                    />
                    <InputField
                        label={'Bank Name'}
                        name={'dob'}
                        value={''}
                        placeholder={'Enter Bank Name'}
                        onChange={undefined}
                    />
                    <InputField
                        label={'Branch Location'}
                        name={'email'}
                        value={''}
                        placeholder={'Enter Branch Location'}
                        onChange={undefined}
                    />
                </Grid>
                <Grid item sm={6}>
                    <InputField
                        label={'Account Number'}
                        name={'phone'}
                        value={''}
                        placeholder={'Enter Account Number'}
                        onChange={undefined}
                    />
                    <InputField
                        label={'Bank Identifier Code'}
                        name={'password'}
                        value={''}
                        placeholder={'Enter Bank Identifier Code'}
                        onChange={undefined}
                    />
                    <InputField
                        label={'Tax Payer Id'}
                        name={'password'}
                        value={''}
                        placeholder={'Enter Tax Payer Id'}
                        onChange={undefined}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BankDetails