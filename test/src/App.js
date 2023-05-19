import "./App.css";
import Todo from "./component/todo";

function App() {
  const todos = [
    {
      id: 1,
      title: "todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "todo 2",
      completed: true,
    },
  ];

  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
