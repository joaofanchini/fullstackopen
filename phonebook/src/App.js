import axios from "axios";
import {useEffect, useState} from "react";
import Person from "./components/person/Person";

const App = () => {

    const [persons, setPersons] = useState([]);
    const effect = () => {
        axios.get("http://localhost:3001/persons")
            .then(response => setPersons(response.data))
    };

    useEffect(effect, []);

    return <>
        <h1>Persons</h1>
        {persons.map(person => {
            return <Person person={person} key={person.id}></Person>
        })}
    </>;
}

export default App;
