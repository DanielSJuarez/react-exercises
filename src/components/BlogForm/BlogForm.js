import { useState } from "react";
import Form from "./form";

const DATA = [{
    title: 'Initial Blog',
    blogContent: 'This is a blog to show that data is available for reference in the blog form react app',
}]



function BlogForm(prop){
const [blog, setBlog] = useState(DATA); 

const newBlog = (title, blogContent) => {
    const addNewBlog = {
        title,
        blogContent
      }
    setBlog([blog, addNewBlog]) 
  }

    return(
        <>
        <h1>Submited Blog Content</h1>
        <Form newBlog={newBlog}/>
        </>
    )
}

export default BlogForm;