import { useState } from "react";
import Display from "./display";
import Form from "./form";
import { v4 as uuidv4 } from 'uuid';


function BlogApp(){
    const [blog, setBlog] = useState([]); 

    const addBlog = (title, blogContent, id) => {
      const newBlog = {
          title,
          blogContent,
          id: uuidv4(),
        }
      setBlog([...blog, newBlog]) 
      }

    const removeBlog = (id) => {
      const updatedBlog = [...blog];
      const index = updatedBlog.findIndex(blog => blog.id === id);
      updatedBlog.splice(index,1);
      setBlog(updatedBlog);
    }

    const editBlog = (title, blogContent, id) => {
      const updatedBlog = [...blog];
      const index = updatedBlog.findIndex(blog => blog.id === id);
      updatedBlog[index].title = title;
      updatedBlog[index].blogContent = blogContent;
      setBlog(updatedBlog);
    }

    const disUrl = blog.map(blog => (
        <Display key={blog.id} {...blog} editBlog={editBlog} removeBlog={removeBlog}/>
    ));
    
        return(
            <>
            <h1>Blog App</h1>
            <Form addBlog={addBlog}/>
            {disUrl}
            </>
        )
    }

export default BlogApp;



    