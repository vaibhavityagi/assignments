import { useState } from "react";

export function CreateToDo({ handleClick }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <h1>Create a new to-do</h1>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        autoFocus
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <br />
      <br />
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        name="description"
        id="description"
        value={desc}
        onChange={(evt) => setDesc(evt.target.value)}
      />
      <br /> <br />
      <button onClick={() => handleClick(title, desc)}>Add</button>
    </div>
  );
}
