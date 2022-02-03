function Tag({ tag, setFilter, id}) {
    return (
        <section>
            <button  id={id} type='button' name={tag} onClick={() => setFilter(tag)}>{tag}</button>
        </section>
    )
}

export default Tag;