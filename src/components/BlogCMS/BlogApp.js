import { useState } from "react";
import Display from "./display";
import Form from "./form";
import { v4 as uuidv4 } from 'uuid';


function BlogApp(){
    const [blog, setBlog] = useState([]); 

    const disUrl = blog.map(blog => (
        <Display {...blog} removeBlog={removeBlog}/>
    ));
    
    const addBlog = (title, blogContent) => {
        const newBlog = {
            title,
            blogContent,
          }
        setBlog([...blog, newBlog]) 
      }

      const removeBlog = (id) => {
        const updatedBlog = [...blog];
        const index = updatedBlog.findIndex(blog => blog.id === id);
        updatedBlog.splice(index,1);
        setBlog(updatedBlog);
      }
    
        return(
            <>
            <h1>Blog App</h1>
            <Form addBlog={addBlog}/>
            {disUrl}
            </>
        )
    }

export default BlogApp;



    