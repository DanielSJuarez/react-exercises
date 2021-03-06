function Display(props) {
    
    const {url, tag, title}= props.bookmark
     return (
        <section className='bookMarks'>
            <p>{tag}</p>
            <p>{title}</p>
            <p>{url}</p>
        </section>
    )
}

export default Display;