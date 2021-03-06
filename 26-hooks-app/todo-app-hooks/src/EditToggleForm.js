import React, { useContext } from "react";
import useInputState from "./hooks/useInputState"
import TextField from "@mui/material/TextField";
import { DispatchContext } from "./contexts/todos.context"

export default function EditToggleForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext)
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({ type: "EDIT", id: id, newTask: value });
      reset();
      toggleEditForm();
    }}>
      <TextField value={value} onChange={handleChange}/>
    </form>
  )
};
