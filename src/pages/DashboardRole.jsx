/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/dashboard/Header'
import SideBar from '../components/dashboard/SideBar'
import RoleTable from '../components/dashboard/tablerole/RoleTable'

function DashboardRole() {
  return (
    <div>
        <Header/>
        <SideBar/>
        <RoleTable/>
    </div>
  )
}

export default DashboardRole