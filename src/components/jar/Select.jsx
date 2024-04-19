import React, { forwardRef } from 'react'
import { useId } from 'react'

function Select({
  options,
  label,
  className = " ",
  ...props
}, ref) {
  const Id = useId()
  return (
    <div className='w-full border-black'>
      {
        label && <label htmlFor={Id}>
        </label>}

      <select id={Id} ref={ref} {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
        {options?.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        )

        )}
      </select>


    </div>
  )
}

export default forwardRef(Select)
