import { useState } from 'react';
import BlogList from './BlogList';
import BlogRead from './BlogRead';
import { v4 as uuidv4 } from 'uuid';


const DATA = [{
    title: 'Lorem One',
    blogContent: 'Everything that can be invented has been invented. (Charles H. Duell, Commissioner, U.S. Office of Patents, 1899) I’ve finally learned what ‘upward compatible’ means. It means we get to keep all our old mistakes. (Dennie van Tassel) A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more. (Peter Seebach) Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)',
    id: uuidv4(),

},
{
    title: 'Lorem Two',
    blogContent: 'Everything that can be invented has been invented. (Charles H. Duell, Commissioner, U.S. Office of Patents, 1899) I’ve finally learned what ‘upward compatible’ means. It means we get to keep all our old mistakes. (Dennie van Tassel) A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more. (Peter Seebach) Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)',
    id: uuidv4(),

},
{
    title: 'Lorem Three',
    blogContent: 'Everything that can be invented has been invented. (Charles H. Duell, Commissioner, U.S. Office of Patents, 1899) I’ve finally learned what ‘upward compatible’ means. It means we get to keep all our old mistakes. (Dennie van Tassel) A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more. (Peter Seebach) Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)',
    id: uuidv4(),

},
{
    title: 'Lorem Four',
    blogContent: 'Everything that can be invented has been invented. (Charles H. Duell, Commissioner, U.S. Office of Patents, 1899) I’ve finally learned what ‘upward compatible’ means. It means we get to keep all our old mistakes. (Dennie van Tassel) A hacker on a roll may be able to produce–in a period of a few months–something that a small development group (say, 7-8 people) would have a hard time getting together over a year. IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more. (Peter Seebach) Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)',
    id: uuidv4(),
},
];


function BlogReadingApp() {
    const [blog, setBlog] = useState(DATA);
    const [filter, setFilter] = useState(null);


    const blogList = blog
    .map((blog) => (
        <BlogList key={blog.id} {...blog} setFilter={setFilter}/>
      ));


  const blogRead = blog.filter(blog => blog.id === filter)[0];

    return (
        <>
        <h1>Read a blog!</h1>
        {blogList}
        {filter && <BlogRead blogRead={blogRead}/>}
        
        </>
    )
}

export default BlogReadingApp;