import { useState } from 'react';

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
            addForm(state.url, state.title, state.tag);
            setState(INITIAL_STATE);
            return;
        } else {
            addTag(state.tag);
            addForm(state.url, state.title, state.tag);
            setState(INITIAL_STATE);
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