import React, { useState, useEffect } from "react";

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Hello World!")
    console.log("Hello World1!")
    // Fetch todos from the API
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <p>Loading todos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>ToDos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> -{" "}
            {todo.completed ? <span style={{ color: "green" }}>Completed</span> : <span style={{ color: "red" }}>Pending</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
