import React from 'react'
import styles from './TimesheetModal.module.scss'
import { Box, Divider, Grid, Modal, Typography } from '@mui/material'
import InputField from '../inputField/InputField';
import SelectField from '../selectField/SelectField';
import ModalHeading from '../modalHeading/ModalHeading';
import SimpleButton from '../simleButton/SimpleButton';

export interface ITimesheetModal {
    heading: string;
    open: boolean;
    handleClose: () => void;
}

const TimesheetModal = ({ heading, open, handleClose }: ITimesheetModal) => {

    return (
        <Modal
            open={open}
            sx={{ width: 500, height: "fit-content", margin: "auto" }}
        >
            <Grid className={styles.timesheetModaContainer}>
                <ModalHeading
                    heading={heading}
                    onClick={handleClose}
                />
                <Grid className={styles.timesheetModal}>
                    <SelectField
                        label={'Select Employee'}
                        value={0}
                        onChange={undefined}
                    />
                    <Box>
                        <SelectField
                            label={'Date'}
                            value={0}
                            onChange={undefined}
                        />
                        <SelectField
                            label={'Hours'}
                            value={0}
                            onChange={undefined}
                        />
                    </Box>
                    <InputField
                        label={'Remark'}
                        name={''}
                        value={''}
                        placeholder={''}
                        onChange={undefined}
                    />
                </Grid>
                <Box display={"flex"} justifyContent={"right"}>
                    <SimpleButton
                        name={'Close'}
                        color={''}
                        bgColor={'darkgray'}
                        onClick={handleClose}
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

export default TimesheetModal