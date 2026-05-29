import type { Note } from "../types/types";
import NoteItem from "./NoteItem";

interface Props {
  notes: Note[];
  currentNote: Note;
  onSelect: (note: Note) => void;
  onDelete: (note: Note) => void;
  onNew: () => void;
}

const NoteList = ({ notes, currentNote, onSelect, onNew }: Props) => {
  return (
    <div className="border rounded p-4 gap-2 flex flex-col w-[30%] overflow-y-auto notes-list">
      <div
        className="border rounded p-2 bg-lakers-purple text-xl text-lakers-gold font-bold cursor-pointer hover:opacity-90"
        onClick={onNew}
      >
        Create LeNote
      </div>
      {notes.map((n) => (
        <NoteItem key={n.id} note={n} isSelected={currentNote.id === n.id} onClick={onSelect} />
      ))}
    </div>
  );
};

export default NoteList;
