import React from 'react'

function Item({title,paths}) {
  return (
//     <ul className='gap-2'>
//         {/* main heading */}
//         <h1 className='font-semibold text-yellow-300'> {title}</h1>
//         {
//             paths.map((item)=>(
//                 <li key={item.name}><a href={item.link} className='hover:text-teal-400 hover:scale-110 duration 300'>
//                   {item.name}  </a></li>
//             ))
//         }
//     </ul>
<ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {paths.map((link) => (
        <li key={link.id}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Item

