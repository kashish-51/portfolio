import React from 'react'
import Navbar from './components/Navbar'
import { Banner } from './components/Banner'
import Marquee from './components/marquee'
import Marqueee from './components/Marqueee'
import Marqueeee from './components/Marqueeee'

import Contactme from './components/Contactme'

const App = () => {
  return (
    <>
    <div className='bg-black'>
    <Navbar/>
    <Banner/>
    <Marquee/>
    <Marqueee/>
    <Marqueeee/>

    <Contactme/>

    </div>
    

    {/* <Marquee/> */}
    {/* <Header/> */}

    
    </>
  )
}

export default App