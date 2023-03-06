import React, { useCallback } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/forms/TodoForm";
import { useAtom } from "jotai";
import { addTodo } from "../api-calls/todos";
import { todoAtomFamily, todosAtom } from "../state/atoms";
import {addTodoToJotai} from './../state/utils'
// import ErrorBoundary from "../components/debug/ErrorBoundary";

function AddTodo() {
  const navigate = useNavigate();
  const [, setTodos] = useAtom(todosAtom);

  const handler = useCallback(
    async (data) => {
      const newTodo = await addTodo(data); // API Call

      // Add to Global State (Jotai)
      addTodoToJotai(newTodo, setTodos)

      navigate("/");
    },
    [addTodo, todoAtomFamily, setTodos]
  );

  return (
    <>
      <Typography
        component={`h1`}
        variant="h3"
        sx={{ textAlign: "center", marginBlockEnd: "0.5em" }}
      >
        Add Todo
      </Typography>
      {/* <ErrorBoundary>*/}
      <TodoForm handler={handler} />
      {/*  </ErrorBoundary> */}
    </>
  );
}

export default AddTodo;
