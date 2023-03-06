import React, { useEffect, useCallback } from "react";
import Typography from "@mui/material/Typography";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { getTodos, removeTodo } from "./../api-calls/todos";
import { todoAtomFamily, filteredAtom, todosAtom } from "../state/atoms";
import { addTodoToJotai} from "../state/utils"

import Filter from "../components/Filter";
import List from "../components/TodoList";
// import ErrorBoundary from "../components/debug/ErrorBoundary";

function ListTodos() {
  const navigate = useNavigate();

  const [todos, setTodos] = useAtom(todosAtom);
  const [filteredTodos] = useAtom(filteredAtom);

  const removeHandler = useCallback(
    async (id) => {
      // remove API call
      await removeTodo(id);

      // remove local
      setTodos((prev) => prev.filter((item) => item !== id));
      todoAtomFamily.remove({ id });
    },
    [removeTodo, setTodos, todoAtomFamily]
  );

  const updateHandler = useCallback(
    (id) => {
      navigate(`/update/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    (async () => {
      console.log("initial load function called", todos);
      const remoteTodos = await getTodos();
      for (const item of remoteTodos) {
        addTodoToJotai(item, setTodos)
      }
    })();
  }, []);

  return (
    <>
      <Typography
        component={`h1`}
        variant="h3"
        sx={{ textAlign: "center", marginBlockEnd: "0.5em" }}
      >
        Todos
      </Typography>
      <Filter />
      {/* <ErrorBoundary> */}
      {filteredTodos.length ? (
        <List
          todos={filteredTodos}
          updateHandler={updateHandler}
          removeHandler={removeHandler}
        />
      ) : (
        <p>No todos to show</p>
      )}

      {/* </ErrorBoundary> */}
    </>
  );
}

export default ListTodos;
