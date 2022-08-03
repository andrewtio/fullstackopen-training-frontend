import React from "react";
import Name from "./Name";

const Person = ({ persons, filter }) => {
  const filteredPerson = persons.filter((person) => {
    const filterUpperCase = filter.toUpperCase();
    const personUpperCase = person.name.toUpperCase();
    return personUpperCase.includes(filterUpperCase);
  });
  return (
    <div>
      {filteredPerson.map((person, i) => (
        <Name key={i} person={person} />
      ))}
    </div>
  );
};

export default Person;
