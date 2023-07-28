import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import db from "./firebase";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("todos").onSnapshot((snapshot) => {
            setTodos(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    text: doc.data().text,
                }))
            );
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
