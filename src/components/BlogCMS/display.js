function Display({title, blogContent, editBlog, removeBlog, id}){
    return(
        <article>
            <h2>{title}</h2>
            <p>{blogContent}</p>
            <button name='edit' type='button' onClick={()=> editBlog(id)}>Edit</button>
            <button id={id} name='delete' type='button' onClick={()=> removeBlog(id)}>Delete</button>
        </article>
    )
}

export default Display;