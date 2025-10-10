import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div>
      <h1>Panel de Notas</h1>
      <NoteForm onAdd={addNote} />
    </div>
  );
}

export default App;
