import type { Note } from "../types/types";

const createNote = (): Note => {
  const id = Date.now() + Math.random();
  const now = new Date();
  return {
    id: id,
    title: "",
    body: "",
    createdAt: now,
    updatedAt: now,
  };
};

export default createNote;
