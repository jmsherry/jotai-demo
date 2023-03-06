import List from "@mui/material/List";
import Todo from "./Todo";

const TodoList = ({
  removeHandler = () =>
    console.error(`No removeHandler function provided to TodoList`),
  updateHandler = () =>
    console.error(`No updateHandler function provided to TodoList`),
  todos = [],
} = {}) => {
  return (
    <List>
      {todos.map((id, i) => (
        <Todo
          even={(i + 1) % 2 === 0}
          key={id}
          id={id}
          remove={() => removeHandler(id)}
          update={updateHandler}
        />
      ))}
    </List>
  );
};

export default TodoList;
