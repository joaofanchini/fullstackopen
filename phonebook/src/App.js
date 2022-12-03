import {useEffect, useState} from "react";
import Person from "./components/person/Person";
import PersonService from "./services/person/person";

const addPhone = (event) => {
    console.log('Evento add phone',event);
}

const showPhone = (event) => {
    console.log('Evento show phone',event);
}

const App = () => {
    const [persons, setPersons] = useState([]);

    const effect = () => {
        PersonService.getAllPersons().then(response => setPersons(response.data))
    }

    useEffect(effect, []);

    return <>
        <h1>Phonebook</h1>
        {persons.map(person => {
            return <Person person={person} key={person.id}></Person>
        })}
        <h1>Filter</h1>
        <div>
            <form onSubmit={showPhone}>
                <label for="number">Filter show with </label>
                <input name="number" type="number"></input>
                <button type="submit">show</button>
            </form>
        </div>
        <h1>Add new</h1>
        <form onSubmit={addPhone}>
            <label for="name">Nome:</label>
            <input name="name" type="text"></input>
            <label for="number">Number:</label>
            <input name="number" type="text"></input>
            <button type="submit">Add</button>
        </form>
    </>;
}

export default App;
