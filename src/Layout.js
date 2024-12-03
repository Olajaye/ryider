import React from 'react'
import Navbar from './core/Navbar'
import Footer from './core/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <main>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout