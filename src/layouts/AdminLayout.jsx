import React from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Sidebar from '../components/admin/Sidebar'


export default function AdminLayout() {
    
  return (
    <div className="website">
        <Sidebar/>
      <Outlet/>
    </div>
  )
}
