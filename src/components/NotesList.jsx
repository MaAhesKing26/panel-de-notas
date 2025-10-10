{
  notes.map((note) => <Note key={note.id} data={note} onDelete={onDelete} />);
}
