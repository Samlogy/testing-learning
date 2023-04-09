import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<any>([]);
  const [text, setText] = useState("");

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        <input
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" disabled={!text}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id} data-testid="todo-item">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                ){todo.text}
              </span>
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
