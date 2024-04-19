import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import services from '../appwrite/configureservices'
import Container from '../components/jar/Container'
import Postform from '../components/postform/Postform'

function Editpage() {
    const navigate=useNavigate()
    const[post,setPost]=useState(null)
    const {slug}=useParams()

    useEffect(()=>{
        if(slug){
            services.getBlog(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate("/")
        }
    },[navigate,slug])
  return post ?(
    <div className='py-8'>
        <Container>
            <Postform post={post}/>

        </Container>

      
    </div>
  ):null
}

export default Editpage
