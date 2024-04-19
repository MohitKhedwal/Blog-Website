import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import { Controller } from 'react-hook-form'

function RTE({name,control,label,defaultValue=" "}) {
  return (
    <div className='w-full'>
        {label &&  <label className='inline-block mb-1' >{label}</label> }
      
    <Controller
    name={name || "Content"}
    control={control}
    render={({field:{onChange}})=>{

        return <Editor
        apiKey='bfdcfagcb9pjlukfv7tzm7r02huxvucy5cvmi3vm5quk540k'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    }}
    />

    </div>
  )
}

export default RTE
