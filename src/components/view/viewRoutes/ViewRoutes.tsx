import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../../pages/home/Home'
import Staff from '../../../pages/staff/Staff'
import Employee from '../../../pages/employee/Employee'
import Timesheet from '../../../pages/timesheet/Timesheet'
import Payroll from '../../../pages/payroll/Payroll'
import Overview from '../../../pages/home/overview/Overview'
import Report from '../../../pages/home/report/Report'
import ManageLeave from '../../../pages/timesheet/manageLeave/ManageLeave'
import Attendance from '../../../pages/timesheet/attendance/Attendance'
import CreateEmployee from '../../../pages/createEmployee/CreateEmployee'

const ViewRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/staff' element={<Staff />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/employee/create' element={<CreateEmployee />} />
                <Route path='/payroll' element={<Payroll />} />
                <Route path='/overview' element={<Overview />} />
                <Route path='/report' element={<Report />} />
                <Route path='/timesheet' element={<Timesheet />} />
                <Route path='/manage-leave' element={<ManageLeave />} />
                <Route path='/attendance' element={<Attendance />} />
            </Routes>
        </Fragment>
    )
}

export default ViewRoutes