function TagList({props}) {

    const { title, tag, url } = props.tagListMap;

    return (
        <section>
            <p>{tag}</p>
            <p>{title}</p>
            <p>{url}</p>
        </section>
    )
}

export default TagList;