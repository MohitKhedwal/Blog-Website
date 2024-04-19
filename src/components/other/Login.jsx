import React, { useState } from 'react'
// import authService from '../appwrite/auth.js'
import authService from "../../appwrite/auth"
import { useDispatch } from 'react-redux'
import { Link, useFormAction, useNavigate } from 'react-router-dom'
import { enter } from '../../store/authSlice'
import { useForm } from 'react-hook-form'
// import {Input} from "../index"
import Input from "../jar/Input"
// import {Button} from "../index"
import Button from '../jar/Button'

function Login() {
    const [error,setError]=useState(" ")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const{register,handleSubmit}=useForm()

    const login=async(data)=>{
   // if any error encounters
   setError("")
      try {
        const session= await authService.login(data)

        if(session){
            const userData=await authService.currentUser()
            if(userData)
             (dispatch(enter(userData)))   
              
            navigate("/")
            
        }
      } catch (error) {
        setError(error.message)
      }
    }
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-lg p-4 '>
      <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </span>
                </div>
                
            <h2 className='text-center text-black text-2xl font-bold'> Sign in to your account</h2>
              <p className="mt-2 text-center text-base text-black/60">
                {/* doubt */}
              Don&apos;t have an account?&nbsp; 

              <Link to="/signup"
              className='font-medium hover:underline duration-150 transition-all'
              >Sign UP</Link>

              </p>
              {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

              <form   onSubmit={handleSubmit(login)}>
                 <div className='space-y-4'>
                    < Input 
                        label="Email"
                        type="email"
                        placeholder="please enter your email"
                        {...register('email',{
                            required:'Email is required',
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        })}
                        
                        />

                        < Input
                            label="Password"
                            type="password"
                            placeholder="Enter Password"
                            {...register('password', {
                            required: true,
                            pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d^\w\s]{8}$/
                        })}
                            />

                            < Button
                                btntext={"Sign in"}
                                type="submit"
                                />

                 </div>
              </form>
      </div>
    </div>
  )
}

export default Login


// main background : bg-[#DAA49A]
// blog background : bg-[#7D9B92]
// buttons background : bg-[#D1A611]
// header,Footer  background : bg-[#424242]

// text-overall: text-black
// text-header :text-[#F5F0E1]
// text-buttons : text-[#000080]
