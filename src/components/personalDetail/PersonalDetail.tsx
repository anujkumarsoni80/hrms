import React from 'react'
import styles from './PersonalDetail.module.scss'
import { Divider, Grid, Typography } from '@mui/material';
import InputField from '../inputField/InputField';
import SelectField from '../selectField/SelectField';

const PersonalDetail = () => {
    return (
        <Grid className={styles.personalDetailContainer}>
            <Typography variant='h5' fontSize={20} fontWeight={500}>Personal Detail</Typography>
            <Divider />
            <Grid container className={styles.personalDetail}>
                <Grid item sm={6}>
                    <InputField
                        label={'Name'}
                        name={'name'}
                        value={''}
                        placeholder={'Enter employee name'}
                        onChange={undefined}
                    />
                    <InputField
                        label={'Date of Birth'}
                        name={'dob'}
                        value={''}
                        placeholder={'Enter employee phone'}
                        onChange={undefined}
                    />
                    <InputField
                        label={'Email'}
                        name={'email'}
                        value={''}
                        placeholder={'Enter Employee email'}
                        onChange={undefined}
                    />
                </Grid>
                <Grid item sm={6}>
                    <InputField
                        label={'Phone'}
                        name={'phone'}
                        value={''}
                        placeholder={'Enter employee phone'}
                        onChange={undefined}
                    />
                    <SelectField
                        label={'Gender'}
                        value={0}
                        onChange={undefined}
                    />
                    <InputField
                        label={'Password'}
                        name={'password'}
                        value={''}
                        placeholder={'Enter employee password'}
                        onChange={undefined}
                    />
                </Grid>
            </Grid>
            <InputField
                label={'Address'}
                name={'address'}
                value={''}
                placeholder={'Enter employee Address'}
                onChange={undefined}
            />
        </Grid>
    )
}

export default PersonalDetail;