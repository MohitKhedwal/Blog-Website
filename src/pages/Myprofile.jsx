import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import services from '../appwrite/configureservices'
// import authService from '../appwrite/auth'
import authService from '../appwrite/auth'
import Container from '../components/jar/Container'
import Input from '../components/jar/Input'
import Button from '../components/jar/Button'

function Myprofile() {
    const {userId}=useParams()
    const userinfo=useSelector(state=>state.auth.userData)
    const fullName=userinfo.name.split("")
    const firstname=fullName[0]
    const {register,handleSubmit,reset}=useForm()
    const [isSafetorest,setIsSafetoreset]=useState(false)
    const[prevname,newname]=useState(userinfo.name)
  
  useEffect(()=>{
       if(!isSafetorest) return;
       reset({updateName:" "})
  },[prevname])

  const changeName=async(name,e)=>{
    try {
         return await authService.nameUpdate(name.updateName)
         .then((updatedname)=>(
            newname(updatedname.name)
         )).then((e)=>setIsSafetoreset(true))
    } catch (error) {
        console.log(error);
    }
  }
    return (
   <Container>
    <div className='py-8'>
    <div className='mx-auto max-w-lg'>
        <h1> Welcome Creative Mind {prevname} </h1>
    </div>
   <div className='w-5/6'>
    <form onSubmit={handleSubmit(changeName)}>
        <Input
        label="Update name:"
        type='text'
        {...register("updateName",{required:true})}
        />
        <Button
        btntext={"Change"}/>
    </form>
   </div>
    </div>
    


   </Container>
  )
}

export default Myprofile
