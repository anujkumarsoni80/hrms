import { Modal, Typography } from '@mui/material'
import React from 'react'

export interface IStaffModal {
    open: boolean;
}
const StaffModal = ({ open }: IStaffModal) => {
    return (
        <Modal
            open={open}
            sx={{ width: 500, height: 400, margin: "auto" }}
        >
            <Typography>hello</Typography>
        </Modal>
    )
}

export default StaffModal