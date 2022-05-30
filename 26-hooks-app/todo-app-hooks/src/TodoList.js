import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <li>{todo.task}</li>
        ))}
      </List>
    </Paper>
  );
}
