import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
