import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Dashboard from './Dashboard'
import Syllabus from './Syllabus'
import Account from './Account'
import Logout from './Logout'
import Header from '../Header'

function Route() {
  return (
    // <Router>
    <div className="">
     
        <Header />
        <Dashboard />
        <Syllabus />
        <Account />
        <Logout />
        {/* <Routes> */}
    {/* <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/syllabus" element={<Syllabus />} />
    <Route path="/account" element={<Account />} />
    <Route path="/logout" element={<Logout />} /> */}
    {/* </Routes> */}
        </div>
    // </Router>
  )
}

export default Route