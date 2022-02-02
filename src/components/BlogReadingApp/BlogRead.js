function BlogRead(props) {

const {title, blogContent} = props.blogRead;

    return (
        <>
        <h3>{title}</h3>
        <p>{blogContent}</p>
        </>
    )
}

export default BlogRead;