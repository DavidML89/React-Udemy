import React from 'react';
import TodoItem from './TodoItem';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <TodoItem
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </Paper>
  );
}
