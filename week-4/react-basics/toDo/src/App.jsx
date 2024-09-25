import { useState } from "react";
import { CreateToDo } from "../components/CreateToDo";
import { Todos } from "../components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { title: "go to gym", description: "gym gym gym", completed: false },
    { title: "go to gym 2", description: "gym gym gym", completed: false },
    { title: "go to gym 3", description: "gym gym gym", completed: false },
  ]);

  const handleClick = (title, description) => {
    setTodos([
      ...todos,
      { title: title, description: description, completed: false },
    ]);
  };

  return (
    <>
      <CreateToDo handleClick={handleClick} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
