function Display({first, last, address, phoneNumber, id}){
    return(
        <section>
            <p>{first} {last}</p>
            <p>{first}</p>
            <p>{last}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
        </section>
    );
}

export default Display;