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

  const navigate = useNavigate();

  const [item, setItem] = useAtom(todoAtomFamily({ id }));
  const handler = useCallback(
    async (data) => {
      await updateTodo(id, data);
      setItem({ ...item, ...data });
      navigate('/');
    },
    [updateTodo, setItem]
  );

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
