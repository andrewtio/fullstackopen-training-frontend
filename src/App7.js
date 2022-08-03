import { useEffect, useState } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("A New Person");
  const [newNumber, setNewNumber] = useState("A New Number");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a New</h2>
      <PersonForm
        persons={persons}
        newPerson={newPerson}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewPerson={setNewPerson}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Person key={persons.id} filter={filter} persons={persons} />
    </div>
  );
};

export default App;
