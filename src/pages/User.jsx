/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/dashboard/Header'
import SideBar from '../components/dashboard/SideBar'
import TableUser from '../components/dashboard/tableuser/TableUser'

function User() {
  return (
    <div>
        <Header/>
        <TableUser/>
        <SideBar/>
    </div>
  )
}

export default User