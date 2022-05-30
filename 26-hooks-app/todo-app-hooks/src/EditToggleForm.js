import React from "react";
import useInputState from "./hooks/useInputState"
import TextField from "@mui/material/TextField";

export default function EditToggleForm({ id, task, toggleEditForm, editTodo }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();
    }}>
      <TextField value={value} onChange={handleChange}/>
    </form>
  )
};
