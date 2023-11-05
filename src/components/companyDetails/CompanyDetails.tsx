import React from 'react'
import styles from './CompanyDetails.module.scss'
import { Box, Divider, Grid, Typography } from '@mui/material'
import InputField from '../inputField/InputField'
import SelectField from '../selectField/SelectField'

const CompanyDetails = () => {
    return (
        <Grid className={styles.companyDetailsContainer}>
            <Typography variant='h5' fontWeight={500} fontSize={20}>Company Details</Typography>
            <Divider/>
            <Grid className={styles.companyDetails}>
                <InputField
                    label={'Employee ID'}
                    name={'emp_id'}
                    value={''}
                    placeholder={'EMP000001'}
                    onChange={undefined}
                />
                <Grid className={styles.branch}>
                    <SelectField
                        label={'Select Branch'}
                        value={0}
                        onChange={undefined}
                    />
                    <SelectField
                        label={'Department'}
                        value={0}
                        onChange={undefined}
                    />
                </Grid>
                <SelectField
                    label={'Select Designation'}
                    value={0}
                    onChange={undefined}
                />
                <InputField
                    label={'Select Designation'}
                    name={'designation'}
                    value={''}
                    placeholder={'2023-11-05'}
                    onChange={undefined}
                />
            </Grid>
        </Grid>
    )
}

export default CompanyDetails