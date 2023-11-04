import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../../pages/home/Home'
import About from '../../../pages/about/About'
import Service from '../../../pages/service/Service'
import Blog from '../../../pages/blog/Blog'
import Contact from '../../../pages/contact/Contact'

const ViewRoutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Fragment>
    )
}

export default ViewRoutes