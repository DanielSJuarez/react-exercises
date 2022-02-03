import { useState } from "react";
import Display from "./display";
import Form from "./form";
import Tag from "./tag";
import TagList from "./tagList";


function BookMarkingApp(prop) {
    const [urlList, setUrlList] = useState([]);
    const [uniTag, setUniTag] = useState([]);
    const [filter, setFilter] = useState(null);

    const disUrl = urlList.map(urlList => (
        <Display key={urlList.id} {...urlList} />
    ));


    const tagSec = uniTag.map(uniTag => (  
        <Tag key={uniTag.id} {...uniTag} setFilter={setFilter}/>
    ));

    const addTag = (tag, id) => {
        const newTag = {
            tag,
            id,
        }
        setUniTag([...uniTag, newTag]);
    }

    const addForm = (url, title, tag, id) => {
        const newSubmit = {
            url,
            title,
            tag,
            id,
        }
        setUrlList([...urlList, newSubmit])
    }

//   const tagList = urlList.filter(urlList => urlList.tag === filter);

  const tagListMap = urlList.filter(urlList => urlList.tag === filter).map(tagList => <TagList {...tagListMap}/>)

    return (
        <div>
            <h1>Enter your links! Sort your data!</h1>
            <Form addForm={addForm} addTag={addTag} {...uniTag}/>
            {tagSec}
            {/* {filter && <TagList tagList={tagList}/>} */}
            {filter && tagListMap}
            {disUrl}
        </div>
    )
}

export default BookMarkingApp;