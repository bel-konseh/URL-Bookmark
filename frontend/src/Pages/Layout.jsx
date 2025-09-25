

import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/LoginSignup/footer'

function Layout() {
 



  return (
    <>
    <Header />

      <Outlet />
      <Footer/>
      
    </>
  )
}

export default Layout
