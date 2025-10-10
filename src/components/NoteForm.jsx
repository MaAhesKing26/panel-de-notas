function NoteForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    const text = e.target.elements.noteText.value.trim();
    if (text) {
      onAdd(text);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="noteText" placeholder="Escribí una nota" />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default NoteForm;
