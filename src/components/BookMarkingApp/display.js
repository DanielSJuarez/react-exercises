function Display({ tag, title, url }) {
    return (
        <section>
            <p>{tag}</p>
            <p>{title}</p>
            <p>{url}</p>
        </section>
    )
}

export default Display;