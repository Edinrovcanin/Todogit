import React, { useState } from "react";
import db from "./firebase";

const TodoForm = () => {
    const [todoText, setTodoText] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (todoText.trim() !== "") {
            db.collection("todos").add({
                text: todoText,
            });
            setTodoText("");
        }
    };

    return (
        <form className="todo-form" onSubmit={addTodo}>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Enter todo..."
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
