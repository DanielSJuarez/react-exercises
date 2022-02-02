import { useState } from "react";

import BlogList from "./components/BlogCMS/BlogList";
import BlogForm from "./components/BlogForm/BlogForm";
import BlogReadingApp from "./components/BlogReadingApp/BlogReadingApp";
import BookMarkingApp from "./components/BookMarkingApp/BookMarkingApp";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {

  const [filter, setFilter] = useState('a');
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button onClick={() => setFilter('a')}>a</button>
          </li>
          <li>
          <button onClick={() => setFilter('b')}>b</button>
          </li>
          <li>
          <button onClick={() => setFilter('c')}>c</button>
          </li>
          <li>
          <button onClick={() => setFilter('d')}>d</button>
          </li>
          <li>
            <button onClick={() => setFilter('e')}>e</button>
          </li>
        </ul>
      </nav>

      {filter === 'a' && <BlogForm/>}
      {filter === 'b' && <ContactForm/>}
      {filter === 'c' && <BlogReadingApp/>}
      {filter === 'd' && <BookMarkingApp/>}
      {filter === 'e' && <BlogList/>}
      
    </div>
  );
}

export default App;
