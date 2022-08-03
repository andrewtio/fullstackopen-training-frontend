import { useState } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState("A New Person");
  const [newNumber, setNewNumber] = useState("A New Number");
  const [filter, setFilter] = useState("");

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
