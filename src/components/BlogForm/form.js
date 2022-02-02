import { useState } from 'react'

function Form({newBlog}) {

    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');

    const submitBlog = (e) =>{
        e.preventDefault();
        if(title.trim().length === 0 || blogContent.trim().length === 0 ){
            return;
          } 
        newBlog(title, blogContent)
        setTitle('');
        setBlogContent('');
    }

    const createTitle = (e) => {
        setTitle(e.target.value);
      }

    const createContent = (e) => {
        setBlogContent(e.target.value);
      }

    return (
        <form onSubmit={submitBlog}>
            <div>
                <input type="text" name="title" value={title} placeholder='title' onChange={createTitle}></input>
                <textarea name="blogContent" value={blogContent} placeholder='Your content here' onChange={createContent}></textarea>
            </div>
            <div>
                <button name='submit' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Form;