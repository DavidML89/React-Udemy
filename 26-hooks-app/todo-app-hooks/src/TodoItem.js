import React from "react";
import EditToggleForm from "./EditToggleForm";
import useToggleState from "./hooks/useToggleState"
import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TodoItem({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggleEditing] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditToggleForm
          id={id}
          task={task}
          toggleEditForm={toggleEditing}
          editTodo={editTodo}
        />
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={toggleEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )
    }
    </ListItem>
  );
};
