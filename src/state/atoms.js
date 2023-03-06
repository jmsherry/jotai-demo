import { atom } from "jotai";
import { atomFamily, atomWithStorage } from "jotai/utils";

export const todosAtom = atomWithStorage('todos', []); // full of ids

export const todoAtomFamily = atomFamily(
  // Full of the actual todos
  ({ title = "", duration = "", done = false }) => {
    console.log("creating", { title, duration, done });
    return atom({ title, duration, done });
  },
  (a, b) => {
    console.log("comparing", a, b);
    return a.id === b.id;
  }
);

export const filterMap = Object.freeze({
  all: "all",
  done: "done",
});

export const filterAtom = atomWithStorage('filter', filterMap.all); // The filter term

export const filteredAtom = atom((get) => {
  // derived state that
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === filterMap.all) {
    return todos;
  }
  if (filter === filterMap.done) {
    return todos.filter((id) => get(todoAtomFamily({ id })).done);
  }
  return todos.filter((id) => !get(todoAtomFamily({ id })).done);
});
