function Note({ note, onDelete }) {
  return (
    <div className="note-card">
      <button className="delete-btn" onClick={() => onDelete(note.id)}>×</button>
      <h3>{note.title || "Untitled"}</h3>
      <p>{note.text}</p>
      <small>{note.date}</small>
    </div>
  );
}
export default Note;