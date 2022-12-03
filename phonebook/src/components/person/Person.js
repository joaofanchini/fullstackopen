const Person = ({person}) => {
    return <>
        <p>Name: {person.name}</p>
        <p>Number: {person.number}</p>
        <p>ID: {person.id}</p>
    </>;
}

export default Person;