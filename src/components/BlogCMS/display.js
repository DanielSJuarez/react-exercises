function Display({title, blogContent}){
    return(
        <article>
            <h2>{title}</h2>
            <p>{blogContent}</p>
            <button name='edit' type='button'>Edit</button>
            <button name='delete' type='button'>Delete</button>
        </article>
    )
}

export default Display;