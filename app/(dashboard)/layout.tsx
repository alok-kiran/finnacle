import Header from '@/components/header'
import React, { Suspense } from 'react'

function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Header />
    <main className=' px-3 lg:px-4'>
      {children}
    </main>
    </Suspense>
  )
}

export default DashboardLayout
