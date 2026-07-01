import Note from './Note';

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="empty">No notes yet!</p>
      ) : (
        notes.map(note => (
          <Note key={note.id} note={note} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}
export default NoteList;