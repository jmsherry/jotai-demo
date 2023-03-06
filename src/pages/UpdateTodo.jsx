import React, { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useAtom } from "jotai";
import { todoAtomFamily } from "../state/atoms";
import { updateTodo } from "../api-calls/todos";
import TodoForm from "../components/forms/TodoForm";
// import ErrorBoundary from "../components/debug/ErrorBoundary";

function UpdateTodo() {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const [item, setItem] = useAtom(todoAtomFamily({ id }));
console.log('todo', item);
  const handler = useCallback(
    async (data) => {
      await updateTodo(id, data);
      console.log('DD todo', item);
      console.log('DD data', data);
      setItem({ ...item, ...data });
      navigate('/');
    },
    [updateTodo, setItem]
  );
  // return <p>update</p>;
  return (
    <>
      <Typography
        component={`h1`}
        variant="h3"
        sx={{ textAlign: "center", marginBlockEnd: "0.5em" }}
      >
        Update Todo
      </Typography>
      {/* <ErrorBoundary> */}
      <TodoForm todo={item} handler={handler} />
      {/* </ErrorBoundary> */}
    </>
  );
}

export default UpdateTodo;
