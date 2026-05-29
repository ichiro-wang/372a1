import type { Note } from "../types/types";

const createNote = (): Note => {
  const now = new Date();
  return {
    id: crypto.randomUUID(),
    title: "",
    body: "",
    createdAt: now,
    updatedAt: now,
  };
};

export default createNote;
