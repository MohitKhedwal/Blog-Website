import React from 'react'
import Blogspire from "./Blogspire.ico"

function Logo({width="75px"}) {
  return (
    
      <img src={Blogspire} alt="Logo"  width={width} className='rounded-full'/>
    
  )
}

export default Logo