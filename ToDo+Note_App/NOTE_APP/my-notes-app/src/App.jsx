import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import './App.css';

function App() {
 
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, text) => {
    const newNote = {
      id: Date.now(),
      title,
      text,
      date: new Date().toLocaleDateString()
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <NoteInput onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;