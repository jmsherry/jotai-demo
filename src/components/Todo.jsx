import { useAtom } from "jotai";
import { todoAtomFamily } from "../state/atoms";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({
  id,
  remove = () => console.error(`No remove function provided to TodoItem`),
  update = () => console.error(`No remove function provided to TodoItem`),
  even
}) => {
  console.log("id", id);
  const [item, setItem] = useAtom(todoAtomFamily({ id }));
  console.log("🚀 ~ file: Todo.jsx:15 ~ item:", item);

  const toggleDone = () => setItem({ ...item, done: !item.done });

  return (
    <ListItem sx={{ backgroundColor: even ? "hsl(0, 0%, 0%, 0.1)" : "" }}>
      <input type="checkbox" checked={item.done} onChange={toggleDone} />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title} ({item.duration})
      </span>
      <div className="controls" style={{ marginInlineStart: "auto" }}>
        <IconButton aria-label="update" onClick={() => update(id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => remove(id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};

export default TodoItem;
