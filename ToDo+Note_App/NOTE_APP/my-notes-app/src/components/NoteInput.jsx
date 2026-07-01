import React, { useState } from 'react';

function NoteInput({ onAdd }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !text.trim()) return;
    onAdd(title, text);
    setTitle('');
    setText('');
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input 
        placeholder="Title..." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
export default NoteInput;