import Header from '@/components/header'
import React from 'react'

function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <>
    <Header />
    <main className=' px-3 lg:px-4'>
      {children}
    </main>
    </>
  )
}

export default DashboardLayout
