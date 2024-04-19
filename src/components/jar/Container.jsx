import React from 'react'

// children=elementpassed
function Container({children}) {
  return (
    <div className=' w-full max-w-7xl mx-auto px-3  flex h-screen items-center'>
      {children}
    </div>
  )
}

export default Container
