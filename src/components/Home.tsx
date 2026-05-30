import { useState } from "react";
import LeBron from "./LeBron";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Note } from "../types/types";
import createNote from "../utils/createNote";
import toast from "react-hot-toast";

const Home = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [currentNote, setCurrentNote] = useState<Note>(createNote);

  const saveNote = (note: Note, title: string, body: string) => {
    if (title === "") {
      toast.error("Please enter a title in your LeNote");
      return;
    }
    if (body === "") {
      toast.error("Please enter a body in your LeNote");
      return;
    }
    if (title === note.title && body === note.body) return;

    const newNote: Note = {
      ...note,
      title,
      body,
      updatedAt: new Date(),
    };

    toast.success("LeNote saved");
    setCurrentNote(newNote);
    setNotes((prev) => [newNote, ...prev.filter((n) => n.id !== note.id)]);
  };

  const deleteNote = (note: Note) => {
    setNotes((prev) => prev.filter((n) => n.id !== note.id));
    if (note.id === currentNote.id) {
      setCurrentNote(createNote());
    }
    toast.success("LeNote deleted");
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="relative h-16 border-b bg-lakers-gold overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          {Array.from({ length: 30 }, (_, i) => (
            <LeBron key={i} />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-lakers bg-lakers-gold text-lakers-purple italic cursor-default select-none px-4 w-96 h-full flex items-center justify-center [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            LeNote James
          </h1>
        </div>
      </header>
      <main className="flex flex-1 min-h-0 p-2 gap-2">
        <NoteList
          notes={notes}
          currentNote={currentNote}
          onSelect={setCurrentNote}
          onDelete={deleteNote}
          onNew={() => setCurrentNote(createNote())}
        />
        <NoteEditor
          key={currentNote.id}
          note={currentNote}
          onSave={saveNote}
          onDelete={deleteNote}
          isNewNote={!notes.some((n) => n.id === currentNote.id)}
        />
      </main>
    </div>
  );
};

export default Home;
