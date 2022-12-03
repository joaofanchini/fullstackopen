import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const PersonService = {
    getAllPersons: () => {
        return axios.get(BASE_URL);
    }
}

export default PersonService;
