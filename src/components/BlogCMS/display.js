import { useState } from 'react'

function Display({title, blogContent, editBlog, removeBlog, id }) {
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newBlogContent, setNewBlogContent] = useState('');

    const saveChange = (e) => {
        e.preventDefault();
        if(newTitle.trim().length === 0  || newBlogContent.trim().length === 0 ){
            return;
        }
        editBlog(newTitle, newBlogContent, id)
        setNewTitle('');
        setNewBlogContent('');
        setEdit(false);
    }

    const clearChange = (e) => {
        setNewTitle('');
        setNewBlogContent('');
        setEdit(false);
    }

    const updateTitle = (e) => {
        setNewTitle(e.target.value);
      }

      const updateContent = (e) => {
        setNewBlogContent(e.target.value);
      }


    const saveMode = (
        <article className='blog'>
            <h2>{title}</h2>
            <p>{blogContent}</p>
            <button name='edit' type='button' onClick={()=> setEdit(true)}>Edit</button>
            <button id={id} name='delete' type='button' onClick={()=> removeBlog(id)}>Delete</button>
        </article>
    )

    const editMode = (
        <article>
            <h2>{title}</h2>
            <p>{blogContent}</p>
            <input type='text' value={newTitle} placeholder='New Title' onChange={updateTitle}></input>
            <input type='text' value={newBlogContent} placeholder='New Content' onChange={updateContent}></input>
            <button name='save' type='submit' onClick={saveChange}>Save</button>
            <button id={id} name='cancel' type='button' onClick={clearChange}>Cancel</button>
        </article>
    )

    return (
        <>
        {edit ? editMode : saveMode}
        </>
    )
}

export default Display;


