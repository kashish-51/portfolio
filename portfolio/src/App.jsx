import React from 'react'
import Navbar from './components/Navbar'
import { Banner } from './components/Banner'
import Marquee from './components/marque'
import Contactme from './components/Contactme'

const App = () => {
  return (
    <>
    <div className='bg-black'>
    <Navbar/>
    <Banner/>
    <Marquee/>
    <Contactme/>

    </div>
    

    {/* <Marquee/> */}
    {/* <Header/> */}

    
    </>
  )
}

export default App