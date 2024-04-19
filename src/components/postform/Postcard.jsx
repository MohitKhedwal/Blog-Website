import React from 'react'
import { Link } from 'react-router-dom'
import services from '../../appwrite/configureservices'
import { useSelector } from 'react-redux'

function Postcard({$id,title,bannerImage}) {
  const userData=useSelector(state=>state.auth.userData)
 
  
  return (
   <Link to={`/post/${$id}`}>
    <div className='w-full bg-[#7D9B92] rounded-lg p-4 hover:scale-105 '>
      <div className='w-full justify-center p-2'>
       { console.log(bannerImage)}
        <img src={x} alt={title} />
      </div>
      <h2 className='font-bold text-[#000080]'>
        {title}
      </h2>

    </div>
   
   </Link>
  )
}

export default Postcard
// main background : bg-[#DAA49A]
// blog background : bg-[#7D9B92]
// buttons background : bg-[#D1A611]
// header,Footer  background : bg-[#424242]

// text-overall: text-black
// text-header :text-[#F5F0E1]
// text-buttons : text-[#000080]
