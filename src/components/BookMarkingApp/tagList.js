function TagList(tag, title, url) {

    // const { title, tag, url } = props.tagList;

    return (
        <section>
            <p>{tag}</p>
            <p>{title}</p>
            <p>{url}</p>
        </section>
    )
}

export default TagList;