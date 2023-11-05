import React from 'react'
import styles from './DeleteModal.module.scss'
import { Box, Grid, Modal, Typography } from '@mui/material'
import ModalHeading from '../modalHeading/ModalHeading'
import { BsExclamationLg } from 'react-icons/bs';
import SimpleButton from '../simleButton/SimpleButton';


export interface IDeleteModal {
    open: boolean;
    handleclose: () => void;
}
const DeleteModal = ({ open, handleclose }: IDeleteModal) => {
    return (
        <Modal
            open={open}
            sx={{ width: 520, height: "fit-content", margin: "auto" }}
        >
            <Grid className={styles.deleteModalContainer}>
                <Box>
                    <BsExclamationLg fontSize={50} />
                </Box>
                <Typography textAlign={"center"} variant='h4' fontSize={28} fontWeight={600} marginBlock={2}>Are you sure?</Typography>
                <Typography textAlign={"center"} variant='h5' fontSize={20} fontWeight={500}>
                    This action can not be undone. Do you want to continue?
                </Typography>
                <Box>
                    <SimpleButton
                        name={'No'}
                        color={''}
                        bgColor={'darkgray'}
                        onClick={handleclose}
                    />
                    <SimpleButton
                        name={'Yes'}
                        color={''}
                        bgColor={''}
                        onClick={undefined}
                    />
                </Box>
            </Grid>
        </Modal>
    )
}

export default DeleteModal