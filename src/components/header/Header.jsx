import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import Logo from '../other/Logo'
import Logout from "../header/Logout"

function Header() {
    // for going to one page to another
    const navigate=useNavigate() 

    // for updating the state tree
    const dispatch=useDispatch()

    // for setting the authentiction is page is allowed by the user
    const authstatus =useSelector(state=>state.auth.status)

    // for getting the userId for loading according content
    const userId=useSelector(state=>state.auth.userData?.$id)

    const navItems=[
        {
            title:"Home",
            slug:"/",
            // for setting authstatus
            active:true
        },
        {
            title:"Login",
            slug:"/login",
            //opp od authstatus if logged no login and vice-versa
            active:!authstatus
        },
        {
            title:"Signup",
            slug:"create-account",
            //opp od authstatus if signup no signup and vice-versa
            active:!authstatus
        },
        {
            title:"All Blogs",
            slug:"/blogs",
            //agar logged in hai toh hi dikhaana
            active:authstatus
        },
        {
            title:"Add Blog",
            slug:"/add-post",
            //agar logged in hai toh hi dikhaana
            active:authstatus
        },
        // {
        //     title:"Profile",
        //     slug:"/profile", 
        //     //agar logged in hai toh hi dikhaana
        //     active:authstatus
        // }
    ]

  return (
   <header className=' py-3 shadow-lg hover:shadow-gray-500 bg-[#424242]  text-[#F5F0E1] h-20 '>
    <nav className='flex gap-x-4  justify-between px-10 items-center h-full'>
        <div> <Logo/> </div>
        <ul className='flex ml-auto gap-x-4'>
            {navItems.map((item)=>(
                item.active? <li key={item.slug} className='hover:scale-110'>
                <button onClick={()=>(navigate(item.slug))} className='hover:scale-100'>
                    {item.title}
                </button>

                </li>:null
            ))}
      
          
          {
            authstatus &&(
                <li>
                    <Logout/>
                </li>
            )
          }
          {
             authstatus &&(
                <li>
                   <Link to={`/user/${userId}`}>
                    Profile
                   </Link>
                </li>
            )
          }
            </ul>
    </nav>

   </header>
  )
}

export default Header

// main background : bg-[#DAA49A]
// blog background : bg-[#7D9B92]
// buttons background : bg-[#D1A611]
// header,Footer  background : bg-[#424242]

// text-overall: text-black
// text-header :text-[#F5F0E1]
// text-buttons : text-[#000080]
