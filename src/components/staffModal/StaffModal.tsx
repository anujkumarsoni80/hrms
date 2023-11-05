import { Box, Divider, Grid, Modal, Typography } from '@mui/material'
import styles from './StaffModal.module.scss'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import InputField from '../inputField/InputField';
import SelectField from '../selectField/SelectField';
import SimpleButton from '../simleButton/SimpleButton';


export interface IStaffModal {
    open: boolean;
    handleCloss: any;
}
const StaffModal = ({ open, handleCloss }: IStaffModal) => {
    const [userRoll, setUserRoll] = useState();
    const handleChange = () => {

    }

    return (
        <Modal
            open={open}
            sx={{ width: 500, height: "fit-content", margin: "auto" }}
        >
            <Grid sx={{ padding: 4 }} className={styles.staffModalContainer}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant='h5' fontWeight={500} fontSize={20}>Create New User</Typography>
                    <RxCross2 color='#111' fontSize={22} cursor={"pointer"} onClick={handleCloss} />
                </Box>
                <Divider />
                <Box>
                    <InputField
                        label='Name'
                        name={'name'}
                        value={''}
                        placeholder={'Enter your name'}
                        onChange={undefined}
                    />
                    <InputField
                        label='Email'
                        name={'email'}
                        value={''}
                        placeholder={'Enter your email'}
                        onChange={undefined}
                    />
                    <InputField
                        label='Password'
                        name={'password'}
                        value={''}
                        placeholder={'Enter your Password'}
                        onChange={undefined}
                    />
                    <SelectField
                        label={'User Role'}
                        value={0}
                        onChange={handleChange}
                    />
                </Box>
                <Box>
                    <SimpleButton
                        name={'Close'}
                        color={''}
                        bgColor={'darkgray'}
                        onClick={handleCloss}

                    />
                    <SimpleButton
                        name={'Create'}
                        color={''}
                        bgColor={''}
                        onClick={undefined}
                    />
                </Box>
            </Grid>
        </Modal>
    )
}

export default StaffModal;