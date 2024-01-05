export function Todos({ todos }) {
  return (
    <div>
      <h2>Things to do</h2>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button>{todo.completed ? "Done" : "Mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
}
