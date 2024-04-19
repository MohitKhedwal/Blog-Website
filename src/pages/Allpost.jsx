import React, { useEffect, useState } from 'react'
import services from '../appwrite/configureservices'
import Container from '../components/jar/Container'
import Postcard from '../components/postform/Postcard'

function Allpost() {
    const [post,setPosts]=useState([])

    useEffect(()=>{
         services.getallBlog([]).then((post)=>{
            if(post){
                setPosts(post.documents)
            }
         })
    },[])
  return (
    <div>
      <Container>
         <div className='flex flex-wrap'>
          { console.log(post)}
            {post && 
                   
                post.map((post)=>(
                          
                    <div key={post.$id}>
                        <Postcard {...post}/>

                    </div>
                ))
            
             
             }
         </div>
         
      </Container>
    </div>
  )
}

export default Allpost
