import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import services from "../appwrite/configureservices"
import Container from "../components/jar/Container"
import Button from "../components/jar/Button"
import Postcard from "../components/postform/Postcard"
import { Link } from 'react-router-dom'

function Home() {
    const[post,setPosts]=useState([])
    const userData=useSelector(state=>state.auth.status)

    useEffect(()=>{
        services.getallBlog([]).then((posts)=>{
    if(posts){
        setPosts(posts.documents)
    }
    })
        
    })
  return (
    <div className='w-full'>
        <Container>
         <section className='flex Header items-center justify-around text-left'>
      <div className='h-full w-1/2 py-10' >
        <h1 className='text-black text-5xl font-bold '> Lorem ipsum dolor sit amet.</h1>
       <p className='w-full '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet voluptatem numquam, animi vero a explicabo aperiam. Eos, accusamus deleniti.</p>
       <Link to={userData ?'/blogs' :'/create-account'}>
       <Button btntext={userData? "All Blogs" :"Signup"}/>


       </Link>
      </div>
      <div className='justify-center'>

        <img src={"addimage"} alt="" />
      </div>
         </section>
           <section>
            {
                userData&&  <div className='w-full p-2'>
                     <Container>

                        <div className='flex flex-wrap'>
                               {post.map((post)=>(
                                <div key={post.$id} >
                                    <Postcard {...post}/>
                                </div>
                               ))}

                        </div>
                     </Container>
                </div>
            }
           </section>
        </Container>
      
    </div>
  )
}

export default Home
