import type { Note } from "../types/types";

interface Props {
  note: Note;
  isSelected: boolean;
  onClick: (note: Note) => void;
}

const NoteItem = ({ note, isSelected, onClick }: Props) => {
  return (
    <div
      className={`border rounded p-3 cursor-pointer flex flex-col gap-1 ${isSelected ? "border-lakers-purple border-2 bg-lakers-light" : ""}`}
      onClick={() => onClick(note)}
    >
      <h1 className="text-xl font-bold truncate">{note.title}</h1>
      <p className="truncate">{note.body}</p>
    </div>
  );
};

export default NoteItem;
