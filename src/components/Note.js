import React from "react";

const Note = ({ note, toggleImportance, handleDelete }) => {
  const label = note.important ? "make not important" : "make important";
  const deleteLabel = "Delete";
  return (
    <li className="note">
      <span>Your awesome note: {note.content} </span>
      <button onClick={toggleImportance}>{label}</button>{" "}
      <button onClick={handleDelete}>{deleteLabel}</button>
    </li>
  );
};

export default Note;
