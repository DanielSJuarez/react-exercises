function BlogList({title, setFilter, id}) {

    return (
        <button type='button' name={title} onClick={() => setFilter(id)}>{title}</button>
    )
}

export default BlogList;