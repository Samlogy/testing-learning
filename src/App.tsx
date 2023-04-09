import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import { fetchPromise } from "./utils/functions";

export default function App() {
  // console.log(
  //   fetchPromise("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
  //     res.json()
  //   ).
  // );
  return (
    <div className="App">
      <Counter />
      <Login />
      <TodoList />
    </div>
  );
}
