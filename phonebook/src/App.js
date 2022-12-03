import {useEffect, useState} from "react";
import Person from "./components/person/Person";
import PersonService from "./services/person/person";

const App = () => {
    const [persons, setPersons] = useState([]);

    const effect = () => {
        PersonService.getAllPersons().then(response => setPersons(response.data))
    }

    useEffect(effect, []);

    return <>
        <h1>Persons</h1>
        {persons.map(person => {
            return <Person person={person} key={person.id}></Person>
        })}
    </>;
}

export default App;
