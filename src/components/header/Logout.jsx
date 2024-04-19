import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { exit } from '../../store/authSlice'

function Logout(props) {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const logouthandler=()=>{
         authService.logout().then(()=>{
            dispatch(exit())
            navigate('/login')
         }).catch((error)=>{
            console.error('error on logout button:', error)
        })

    }
  return (
   
      
   <button onClick={logouthandler} className='inline px-4 py-2 duration-200 hover:bg-[#7D9B92] rounded-full'>Logout</button>
  )
}

export default Logout
