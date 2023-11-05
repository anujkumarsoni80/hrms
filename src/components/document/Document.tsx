import React from 'react'
import styles from './Document.module.scss'
import { Box, Divider, Grid, Typography } from '@mui/material'
import InputField from '../inputField/InputField'

const Document = () => {
    return (
        <Grid className={styles.documentContainer}>
            <Typography variant='h5' fontSize={20} fontWeight={500}>Document</Typography>
            <Divider />
            <Box>
                <InputField
                    label={'Certificate '}
                    name={'certificate '}
                    value={''}
                    type={"file"}
                    placeholder={''}
                    onChange={undefined}
                />
                <InputField
                    label={'Resume'}
                    name={'resume'}
                    value={''}
                    type={"file"}
                    placeholder={''}
                    onChange={undefined}
                />
                <InputField
                    label={'Photo'}
                    name={'photo'}
                    value={''}
                    type={"file"}
                    placeholder={''}
                    onChange={undefined}
                />
            </Box>
        </Grid>
    )
}

export default Document