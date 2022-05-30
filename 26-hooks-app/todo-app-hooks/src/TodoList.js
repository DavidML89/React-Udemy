import React from 'react';
import TodoItem from './TodoItem';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <TodoItem
            task={todo.task}
            completed={todo.completed}
            key={todo.id}
          />
        ))}
      </List>
    </Paper>
  );
}
