import React, { useContext } from "react";
import EditToggleForm from "./EditToggleForm";
import useToggleState from "./hooks/useToggleState"
import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DispatchContext } from "./contexts/todos.context"


export default function TodoItem({ id, task, completed }) {
  const dispatch = useContext(DispatchContext)
  const [isEditing, toggleEditing] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditToggleForm
          id={id}
          task={task}
          toggleEditForm={toggleEditing}
        />
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => dispatch({ type: "TOGGLE", id: id })} />
          <ListItemText>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => dispatch({ type: "REMOVE", id: id })}>
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
