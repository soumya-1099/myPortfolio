import Herosection from 'components/Herosection'
import React from 'react'
import About from 'components/About'
import Projects from 'components/Projects'
import Experience from 'components/Experience'
import Contact from 'components/Contact'

const index = () => {
  return (
    <div>
      <Herosection/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default index