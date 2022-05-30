import React from "react";
import useInputState from "./hooks/useInputState"
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export default function TodoForm({addTodo}) {
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