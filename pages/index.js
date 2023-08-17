import Herosection from 'components/Herosection'
import React from 'react'
import About from 'components/About'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Contact from 'components/Contact'

const index = () => {
  return (
    <div>
      <Herosection/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default index