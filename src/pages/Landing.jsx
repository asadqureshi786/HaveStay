import React from 'react'
import Header from '../components/landingpage/Header.jsx'
import Banner from '../components/landingpage/Banner.jsx'
import About from '../components/landingpage/About.jsx'
import Counter from '../components/landingpage/Counter.jsx'
import Footer from '../components/landingpage/Footer.jsx'
export default function Landing() {
  return (
    <div className="website">
      <Header />
      <Banner />
      <About/>
      <Counter />
      <Footer />
    </div>
  )
}
