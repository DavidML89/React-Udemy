import React, { useContext } from "react";
import TodoItem from './TodoItem';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { TodosContext } from "./contexts/todos.context"

export default function TodoList() {
  const todos = useContext(TodosContext)
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <TodoItem
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            key={todo.id}
          />
        ))}
      </List>
    </Paper>
  );
}
