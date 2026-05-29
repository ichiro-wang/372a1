import { useState } from "react";
import type { Note } from "../types/types";

interface Props {
  note: Note;
  onSave: (note: Note, title: string, body: string) => void;
  onDelete: (note: Note) => void;
  isNewNote: boolean;
}

const NoteEditor = ({ note, onSave, onDelete, isNewNote }: Props) => {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(note, title, body);
      }}
      className="border rounded p-4 flex flex-col flex-1 min-h-0 gap-4"
    >
      <input
        type="text"
        placeholder="Title"
        className="border rounded px-3 py-2 text-lg font-semibold placeholder:text-gray-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Start writing..."
        className="border rounded px-3 py-2 flex-1 resize-none placeholder:text-gray-400"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <button
          className="border rounded px-4 py-2 self-end bg-lakers-purple text-lakers-gold font-semibold hover:opacity-90 cursor-pointer"
          type="submit"
        >
          Save
        </button>
        {!isNewNote && (
          <button
            type="button"
            className="border border-lakers-gold rounded px-4 py-2 self-end bg-red-500 text-white font-semibold hover:opacity-90 cursor-pointer"
            onClick={() => onDelete(note)}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteEditor;
