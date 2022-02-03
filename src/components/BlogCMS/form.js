import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

function Form({addBlog}){
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');

    const submitBlog = (e) =>{
        e.preventDefault();
        if(title.trim().length === 0 || blogContent.trim().length === 0 ){
            return;
          } 
        addBlog(title, blogContent);
        setTitle('');
        setBlogContent('');
    }

    const clearSub = (e)=>{
        e.preventDefault();
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
                <input className='formInputs' type="text" name="title" value={title} placeholder='Title' onChange={createTitle} required></input>
                <input className='formInputs' type='text' name="blogContent" value={blogContent} placeholder='Your content here' onChange={createContent} required></input>
            </div>
            <div>
                <button name='submit' type='submit'>Submit</button>
                <button name='cancel' type='submit' onClick= {clearSub}>Cancel</button>
            </div>
        </form>
    )
}

export default Form;



    