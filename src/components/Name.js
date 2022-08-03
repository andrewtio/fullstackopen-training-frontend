import React from "react";

const Name = ({ person }) => {
  // console.log("name.name", name.name.includes(persons))
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};
export default Name;
