function Tag({ tag, setFilter }) {
    return (
        <section>
            <button type='button' name={tag} onClick={() => setFilter(tag)}>{tag}</button>
        </section>
    )
}

export default Tag;