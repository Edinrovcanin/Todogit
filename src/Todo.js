import React, { useState } from "react";
import db from "./firebase";
import "./Todo.css"; // Stilizacija komponente

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [editTodoText, setEditTodoText] = useState(todo.text);

    const deleteTodo = () => {
        // Implementacija funkcije za brisanje ToDo stavke
        db.collection("todos").doc(todo.id).delete();
    };

    const updateTodo = () => {
        // Implementacija funkcije za ažuriranje ToDo stavke
        db.collection("todos").doc(todo.id).update({ text: editTodoText });
        setEditing(false);
    };

    return (
        <div className="todo">
            {editing ? (
                <input
                    type="text"
                    value={editTodoText}
                    onChange={(e) => setEditTodoText(e.target.value)}
                />
            ) : (
                <p>{todo.text}</p>
            )}
            <div className="todo-buttons">
                {editing ? (
                    <button onClick={updateTodo}>Save</button>
                ) : (
                    <>
                        <button onClick={() => setEditing(true)}>Edit</button>
                        <button onClick={deleteTodo}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Todo;
