import { useState } from "react";
import Display from "./display";
import Form from "./form";
import Tag from "./tag";
import { v4 as uuidv4 } from 'uuid';


function BookMarkingApp(prop) {
    const [urlList, setUrlList] = useState([]);
    const [filter, setFilter] = useState(null);

    const uniqueTags = [...new Set(urlList.map(url => url.tag))];

    const tagSec = uniqueTags.map(uniTag => (
        <Tag key={urlList.id} tag={uniTag} setFilter={setFilter} />
    ));

    const addForm = (url, title, tag, id) => {
        const newSubmit = {
            url,
            title,
            tag,
            id: uuidv4(),
        }
        setUrlList([...urlList, newSubmit]);
    }

    const bookmarksHTML = urlList
        .filter(bookmark => filter ? bookmark.tag === filter : bookmark)
        .map(bookmark => <Display key={urlList.id} bookmark={bookmark} />)

    return (
        <div>
            <h1>Enter your links! Sort your data!</h1>
            <Form addForm={addForm} {...urlList} />
            <div>
                <button name='all' onClick={e=>setFilter(null)}>All</button>
            </div>
            {tagSec}
            {bookmarksHTML}
        </div>
    )
}

export default BookMarkingApp;