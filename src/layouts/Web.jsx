import React from 'react'
import Header from '../components/landingpage/Header.jsx'
import Footer from '../components/landingpage/Footer.jsx'
import { Outlet } from 'react-router-dom'


export default function Landing() {
    
  return (
    <div className="website">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}
