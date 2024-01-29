import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (children) => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <main style={{minHeight:"80vh"}}>

        <h1>Layout</h1>
        {children}

        </main>
        <Footer/>
    </div>
  )
}

export default Layout