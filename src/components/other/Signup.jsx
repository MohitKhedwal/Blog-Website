import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authSlice, { enter } from '../../store/authSlice'
import authService from '../../appwrite/auth'
import Input from '../jar/Input'
import Button from '../jar/Button'
import Logo from './Logo'

function Signup() {
    const [error,setError]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const{register,handleSubmit}=useForm()
    const authstatus=useSelector((state)=>state.auth.status)

    const create=async(data)=>{
       setError("")
       try {
         const userData=await authService.createAccount(data)
         if(userData){
            const session=await authService.currentUser()
            if(session)  dispatch(enter({userData}))
            

            navigate("/")
            
         }
       } catch (error) {
            setError(error.message)
       }
    }

  return (
    <div className='flex items-center justify-center w-full gap-y-2 '>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className='text-black text-2xl font-bold text-center '> Signup to create your account</h2>
            <p className='mt-2 text-center text-black'>
                {/* doubt */}
            Already have an account?&nbsp;
             <Link to="/login"
              className='font-medium transistion-all duration-150 hover:underline'
             >
              Sign In
             </Link>
             </p>
             {error && ( <p className='text-2xl text-red-500'>{error}</p> )}
             
               <form onSubmit={handleSubmit(create)} >
                <div className='space-y-5'>

                    <Input
                    label=" Name"
                    type="text"
                    placeholder="Enter your Name"

                    {...register("name",{
                        required:true
                    })}
                    />
                    <Input
                    label=" Email"
                    type="email"
                    placeholder="Enter your Email"

                    {...register("email",{
                        required:true,
                        validate:{
                            matchPatern:(v)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                      <Input
                    label=" Password"
                    type="password"
                    placeholder="Enter your password"

                   {...register("password",{
                    required:true,
                    // validate:{
                    //     matchPatern:(v)=>/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{9,}$/.test(v) ||
                    //     "Enter Password with 8 characters"
                    // }

                   })}
                    />
                    <Button
                    type='submit'
                    btntext={"Start Journey 😊"}
                    />


                </div>

               </form>


            

            
            </div>
      
    </div>
  )
}

export default Signup
