import {useState} from 'react';

const INITIAL_STATE = {
    first: '',
    last: '',
    address: '',
    phoneNumber: '',
}

function Form({infoForm}){

const [state, setState] = useState(INITIAL_STATE)

const subContact = (e) => {
    e.preventDefault();
    infoForm(state.first, state.last, state.address, state.phoneNumber);
    setState(INITIAL_STATE);
}

    return(
        <form onSubmit={subContact}>
            <div>
                <input type='text' name='firstName' value={state.first} placeholder='First Name' onChange={e=>setState({...state, first: e.target.value})}></input>
                <input type='text' name='lastName' value={state.last} placeholder='Last Name' onChange={e=>setState({...state, last: e.target.value})}></input>
                <input type='text' name='address' value={state.address} placeholder='Address'onChange={e=>setState({...state, address: e.target.value})}></input>
                <input type='text' name='phoneNumber' value={state.phoneNumber} placeholder='Phone Number' onChange={e=>setState({...state, phoneNumber: e.target.value})}></input>
            </div>
            <div>
                <button  name='name' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Form;