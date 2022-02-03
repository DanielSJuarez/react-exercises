import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

function Form({addBlog}){
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');

    const submitBlog = (e) =>{
        e.preventDefault();
        addBlog(title, blogContent);
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
                <input type="text" name="title" value={title} placeholder='Title' onChange={createTitle}></input>
                <textarea name="blogContent" value={blogContent} placeholder='Your content here' onChange={createContent}></textarea>
            </div>
            <div>
                <button name='submit' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Form;



    