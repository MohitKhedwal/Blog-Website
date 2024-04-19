import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import services from "./appwrite/configureservices"
import authService from "./appwrite/auth"
import { enter,exit } from "./store/authSlice"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"



function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  const userData=useSelector((state)=>state.auth.userData)

  useEffect(()=>{
    authService.currentUser().then((userData)=>{
      if(userData){
              dispatch(enter({userData}))
      }else{
        dispatch(exit())
      }
    }).catch((e)=>{
      console.log('app.jxs :: line no.22', e)
    }).finally(()=>{
      setLoading(false)
    })

  },[userData])
  
  return !loading ?(
    <>
    <div className="min-h-screen flex flex-wrap content-between bg-[#DAA49A]">
      <div className="w-full block">
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
      </div>
    </div>
    
    </>
  ):null
}

export default App
