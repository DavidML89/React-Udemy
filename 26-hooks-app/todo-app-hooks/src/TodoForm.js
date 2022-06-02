import React, { useContext } from "react";
import useInputState from "./hooks/useInputState"
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { DispatchContext } from "./contexts/todos.context"

export default function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      <form onSubmit={e=> {
        e.preventDefault();
        dispatch({ type: "ADD", task: value })
        reset();
      }}
      >
        <TextField value={value} onChange={handleChange}/>
      </form>
    </Paper>
  )
}
