import React from 'react'


// used inplace of button in all website
function Button({
    btntext,
    type="button",
    bgcolor="bg-[#D1A611]",
    textcolor="text-[#000080]",
    // some extra class
    className=" ",
    ...props
}) {

  return (
   <button type={`${type} `} className={`${bgcolor} ${textcolor}  rounded-lg hover:scale-110 py-3 px-2 `} {...props} >{btntext} </button>
  )
}

export default Button
