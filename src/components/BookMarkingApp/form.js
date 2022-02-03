import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

let id = uuidv4();

const INITIAL_STATE = {
    url: '',
    title: '',
    tag: '',
}

function Form({ addForm, addTag, tag}) {

    const [state, setState] = useState(INITIAL_STATE)

    const subForm = (e) => {
        e.preventDefault();
        if (tag === state.tag) {
            addForm(state.url, state.title, state.tag, id);
            setState(INITIAL_STATE);
            id();
            return;
        } else {
            addTag(state.tag, id);
            addForm(state.url, state.title, state.tag, id);
            setState(INITIAL_STATE);
            id();
            return;
        }
    }

        return (
            <form onSubmit={subForm}>
                <div>
                    <input type='text' name='url' placeholder='Url' value={state.url} onChange={e => setState({ ...state, url: e.target.value })}></input>
                    <input type='text' name='title' placeholder='Title' value={state.title} onChange={e => setState({ ...state, title: e.target.value })}></input>
                    <input type='text' name='tag' placeholder='Tag' value={state.tag} onChange={e => setState({ ...state, tag: e.target.value })}></input>
                </div>
                <div>
                    <button name='submit' type='submit'>Submit</button>
                </div>
            </form>
        )
    }

    export default Form;