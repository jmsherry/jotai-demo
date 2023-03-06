import { todosAtom, filterAtom , todoAtomFamily} from "./atoms";

export const addTodoToJotai = (data, setter) => {
  const { _id: id, ...rest } = data;
  setter((prev) => {
    if (prev.includes(id)) return prev;
    const todoFamEntry = { id, ...rest };
    todoAtomFamily(todoFamEntry);
    return [...prev, id];
  });
};

export const serializeAtom =
  (null,
  (get, set, action) => {
    if (action.type === "serialize") {
      const todos = get(todosAtom);
      const todoMap = new Map();

      for (const id of todos) {
        todoMap.set(id, get(todoAtomFamily({ id })));
      }

      const obj = {
        todos,
        todoMap,
        filter: get(filterAtom),
      };

      action.callback(JSON.stringify(obj));
    } else if (action.type === "deserialize") {
      const obj = JSON.parse(action.value);
      // needs error handling and type checking
      set(filterAtom, obj.filter);

      for (const id of obj.todos) {
        const todo = obj.todoMap.get(id);
        set(todoAtomFamily({ id, ...todo }), todo);
      }

      set(todosAtom, obj.todos);
    }
  });
