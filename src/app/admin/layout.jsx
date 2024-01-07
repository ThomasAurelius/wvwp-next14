import React from 'react'
import AdminHeader from '@/components/adminHeader/adminHeader'

const AdminLayout = ({children}) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  )
}

export default AdminLayout