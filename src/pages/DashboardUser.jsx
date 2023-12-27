/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/dashboard/Header'
import SideBar from '../components/dashboard/SideBar'
import UserTables from '../components/dashboard/tableuser/UserTables'

function DashboardUser() {
  return (
    <div>
        <Header/>
        <SideBar/>
        <UserTables/>
    </div>
  )
}

export default DashboardUser