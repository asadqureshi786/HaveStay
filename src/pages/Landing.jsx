import React from 'react'
import Banner from '../components/landingpage/Banner.jsx'
import About from '../components/landingpage/About.jsx'
import Counter from '../components/landingpage/Counter.jsx'
export default function Landing() {
  return (
    <div className="website">
      <Banner />
      <About/>
      <Counter />
    </div>
  )
}
