import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import services from '../appwrite/configureservices'
import Container from '../components/jar/Container'
import Button from '../components/jar/Button'
import parse from "html-react-parser"

function Post() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const isauthor = post && userData ? post.author === userData.$id : false
    useEffect(() => {

        if (slug) {
            services.getBlog(slug).then((post) => {
                if (post) setPost(post)
                else (navigate("/"))
            })
        } else navigate(" /")
    }, [slug, navigate])

    const deletePost = () => {
        services.deleteBlog(post.$id).then((status) => {
            if (status) {
                services.deleteBlog(post.bannerImage)
                navigate("/")
            }
        })

    }

    return post ? (
        <div className='py-8'>
            <Container>
                {console.log(post.bannerImage)}
                <div className='w-full flex justify-center border-black rounded-xl '>
                    <img src={services.previewFile(post.bannerImage)} alt={post.title} className='rounded-xl' />

                    {
                        isauthor && (
                            <div className='absolute bottom-5 left-5'>
                                <Link to={`/edit-post/${post.$d}`}>
                                    <Button btntext={"EDIT"} bgcolor="bg-green-500 text-black" />


                                </Link>
                                <Button bgcolor='bg-red-500 text-black' onClick={deletePost} btntext={"DELETE"} />
                            </div>
                        )
                    }
                </div>
                <div className='w-ful mb-6'>
                    <h1 className='text-2xl font-bold'> {post.title}</h1>
                </div>
                <div className=''>
                    {parse(post.content)}
                </div>
                <div>
                    {
                        post.authorName
                    }
                </div>
            </Container>

        </div>
    ) : null
}

export default Post

// {
//     if (slug) {
//         services.getBlog(slug).then((post) = {
//             if(post)  setPost(post) ;
//             else navigate("/") ;
//         })
//     } else {
//         navigate("/")
//     }
// }