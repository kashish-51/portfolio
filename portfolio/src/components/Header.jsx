import React from 'react';
import man from '../assets/arnav.png'

const Header = () => {
  return (
    <div className=' bg-black w-auto h-screen relative '>
        <div className='absolute bottom-11 right-0'>
           <img src={man} alt="man" />
        </div>
    </div>
  )
}

export default Header