import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import authService from '../../Appwrite/auth'
import services from '../../appwrite/configureservices'
import Input from "../jar/Input"
import Select from "../jar/Select"
import Button from "../jar/Button"
import RTE from '../other/RTE'

function Postform({ post }) {
  const navigate = useNavigate()
  // const userData = useSelector(state => state.auth.userData)
  const userData = useSelector(state => state.auth.userData)
  console.log(userData)
  


  const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
      authorName: post?.authorName || userData.name
    }
 
  })
  console.log(userData.name)
  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await services.uploadFile(data.image[0]) : null

      if (file) {
        await services.deleteFile(post.bannerImage)
      }

      const changedpost = await services.updateBlog(post.$id, {
        ...data,
        bannerImage: file ? file.$id : undefined
      })
      if (changedpost) {
        navigate(`/post/${changedpost.$id}`)
      }

    } else {
      const file = await services.uploadFile(data.image[0])

      if (file) {
        const fileId = file.$id
        data.bannerImage = fileId
        // data.author=userData.$id
        console.log(userData.$id)
        const changedpost = await services.createBlog({...data, authorName: userData.name,author:userData.$id })//{ ...data, author: userData.$id, authorName: userData.name })

        if (changedpost) {navigate(`/post/${changedpost.$id}`)}

        console.log(changedpost)
        console.log(userData.$id)
        console.log(data.author)
      }
    }
  }


  const transformSlug = useCallback((v) => {
    if (v && typeof v === "string")
      return v.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-")

    return " "
  })

// console.log(post)

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', transformSlug(value.title, { shouldValidate: true }))
      }
    })


    return () => {
      subscription.unsubscribe()
    }
  }, [watch, transformSlug, setValue])




  return (
    
      <form onSubmit={handleSubmit(submit)} className=' flex flex-wrap'>

        <div className='w-2/3 px-2'>
          <Input
            label='Title:'
            placeholder="Enter your title"
            {...register("title", { required: true })}
          />

          <Input
            label='Slug'
            placeholder='Slug'
            {...register('slug', { required: true })}
            onInput={(e) => {
              setValue('slug', transformSlug(e.currentTarget.value), { shouldValidate: true })
            }}

          />

          <RTE
            label="Content" name="content" control={control} defaultValues={getValues("content")}
          />
        </div>
        <div className='w-1/3  pl-4 gap-y-3 flex  flex-col items-center'>

          <Input
            label="Banner Image"
            type="file"
            className="mb-4 p-2"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })} />


          {post && <div className='w-full mb-4'>
            <img src={services.previewFile(post.bannerImage)} alt="" />

          </div>}

          <Select
            label="Status"
            placeholder="status"
            options={["active", "inactive"]}
            {...register("status", { required: true })}
          />

          <Input
            label={post ? "Updating as:" : " Posting as"}
            value={userData.name}
            readOnly
            {...register("authorName", { required: true })}
          />

          
           <Button
            type="submit"
            bgcolor={post ? "bg-green-500" : " text-white bg-blue-400"} className="w-full "
            btntext={post ? "Update ": "Publish"}
           />
       
          
           

        </div>


      </form>
    
  )
}

export default Postform







//   const {register, handleSubmit, watch, getValues, setValue, control} = useForm({
//     defaultValues: {
//         title: post?.title || '',
//         slug: post?.$id || '',
//         content: post?.content || '',
//         status: post?.status || 'active',
//         authorName: post?.authorName || userData.name,
//         author:post?.author || userData.$id
//     }
// })


// console.log(userData.name)

// const submit = async(data) => {
//     if (post) {
//         const file = data.image[0] ? await services.uploadFile(data.image[0]) : null
//         if(file){
//             await services.deleteFile(post.bannerImage)
//         }

//         const dbPost = await services.updateBlog(post.$id, {
//             ...data,
//           bannerImage: file ? file.$id : undefined
//         })

//         if(dbPost){
//             navigate(`/post/${dbPost.$id}`)
//         }
//     }else{
//         const file =  await services.uploadFile(data.image[0])

//         if (file) {
//             console.log(file);
//             const fileID = file.$id
//             data.bannerImage = fileID
//             // author=userData.$id
//             const dbPost = await services.createBlog({...data, author: userData.$id, authorName: userData.name })

//             if(dbPost){
//                 navigate(`/post/${dbPost.$id}`)
//             }
            
//         }
//     }
//     // console.log(author)
// }