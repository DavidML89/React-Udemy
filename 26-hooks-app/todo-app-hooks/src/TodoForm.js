import React, { useContext } from "react";
import useInputState from "./hooks/useInputState"
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { TodosContext } from "./contexts/todos.context"

export default function TodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      <form onSubmit={e=> {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
      >
        <TextField value={value} onChange={handleChange}/>
      </form>
    </Paper>
  )
}
