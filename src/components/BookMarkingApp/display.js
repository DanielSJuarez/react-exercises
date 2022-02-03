function Display(props) {
    
    const {url, tag, title}= props.bookmark
     return (
        <section>
            <p>{tag}</p>
            <p>{title}</p>
            <p>{url}</p>
        </section>
    )
}

export default Display;