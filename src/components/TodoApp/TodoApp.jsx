"use client";

import { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todos from "../Todos/Todos";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const response = await fetch("https://next-todo-yrif.vercel.app/api/todos");
    const data = await response.json();
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex gap-8">
      <TodoForm fetchTodos={fetchTodos} />
      <Todos todos={todos} loading={loading} />
    </div>
  );
};

export default TodoApp;
