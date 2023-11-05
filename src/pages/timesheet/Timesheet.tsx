import React, { useState } from 'react'
import styles from './Timesheet.module.scss'
import { Grid } from '@mui/material'
import Header from '../../components/header/Header'
import HeadingText from '../../components/headingText/HeadingText'
import TimesheetTable from '../../components/tables/timesheetTable/TimesheetTable'
import data from '../../data/timesheetData/data.json'
import TimesheetModal from '../../components/timesheetModal/TimesheetModal'
import DeleteModal from '../../components/deleteModal/DeleteModal'

const Timesheet = () => {
  const [open, setOpen] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleEdit = () => setEditModal(!editModal);
  const closeEditModal = () => setEditModal(false);
  const handleDelete = () => setDeleteModal(!deleteModal);
  const closeDeleteModal = () => setDeleteModal(false);


  return (
    <Grid className={styles.timesheetContainer}>
      <Header />
      <HeadingText
        heading={'Manage Timesheet'}
        onClick={handleClick}
      />
      <TimesheetTable
        data={data.timesheetData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <TimesheetModal
        heading={'Create New Timesheet'}
        open={open}
        handleClose={handleClose}
      />
      <TimesheetModal
        heading={'Edit Timesheet'}
        open={editModal}
        handleClose={closeEditModal}
      />
      <DeleteModal
        open={deleteModal}
        handleclose={closeDeleteModal}
      />

    </Grid>
  )
}

export default Timesheet