import { useState } from "react";

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    createNote({
      content: newNote,
      important: Math.random() > 0.5,
    });

    setNewNote("");

    // axios.post("http://localhost:3001/notes", noteObject).then((response) => {
    //   setNotes(notes.concat(response.data));
    //   setNewNote("");
    // });
  };

  return (
    <div className="formDiv">
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
          placeholder="write note content here"
          id="note-input"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NoteForm;
