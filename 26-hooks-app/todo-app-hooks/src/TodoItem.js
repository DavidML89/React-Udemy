import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
export default function TodoItem({ id, task, completed, removeTodo, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
      <ListItemText>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
