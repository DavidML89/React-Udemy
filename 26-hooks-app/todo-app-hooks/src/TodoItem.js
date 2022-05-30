import { Checkbox, ListItem, ListItemText, IconButton, Button, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
export default function TodoItem({ task, completed }) {
  return (
    <ListItem>
      <Checkbox checked={completed} />
      <ListItemText>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
