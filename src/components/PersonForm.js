import React from "react";

const PersonForm = ({
  persons,
  newPerson,
  newNumber,
  setPersons,
  setNewPerson,
  setNewNumber,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    console.log("Button Clicked", event.target);
    const personObject = {
      name: newPerson,
      number: newNumber,
    };
    console.log("persons", persons);
    console.log("personObject", personObject);
    if (persons.some((e) => e.name === newPerson)) {
      alert(`${newPerson} is already added to phone book`);
    } else {
      setPersons(persons.concat(personObject));
      window.alert(`${newPerson} is good`);
      setNewPerson("");
      setNewNumber("");
    }
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewPerson(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newPerson} onChange={handlePersonChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
