import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer"
import useLocalStorageReducer from "../hooks/useLocalStorageReducer"

const initialTodos = [
  { id: '55465413-8a2d-4476-8496-9d66678b1443', task: "Example 1", completed: false},
  { id: '4535910e-6c4f-44f5-980f-09b3aef8baed', task: "Example 2", completed: false}
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [ todos, dispatch ] = useLocalStorageReducer("todos", initialTodos, todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
};
