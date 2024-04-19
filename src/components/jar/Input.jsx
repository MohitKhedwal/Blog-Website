import React, { forwardRef, useId } from 'react'

const Input=  forwardRef(function Input({
  label,
  type="text",
  className=" ",
  ...props
},ref) {

  const id=useId()
  return (
    <section className='w-full'>
      {label &&  <label htmlFor={id}>
        {label}
      </label>  }
        <input 
        id={id}
        type={type} 
        ref={ref}
       {...props}
       className='p-2 ml-2 rounded-lg m-2 w-full'
        />
      
    </section>
  )
})

export default Input
