import { useState } from "react";
import Form from "./form";
import Display from "./display";
import { v4 as uuidv4 } from 'uuid';


function ContactForm(props) {
    const [contact, setContact] = useState([]);
    const disContact = contact.map((contact) => (
        <Display key={contact.id} {...contact} />
      ));
  
    const infoForm = (first, last, address, phoneNumber, id) => {
        const addNewContact = {
            first,
            last,
            address,
            phoneNumber,
            id: uuidv4(),
        }
        setContact([...contact, addNewContact])
    }

    return (
        <>
        <h1>Contact List</h1>
        <Form infoForm = {infoForm}/>
        {disContact}
        </>
    )
}

export default ContactForm;