import { useState } from "react";
import Title from "../Main/Title";

function Header({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    onAddTodo(newTodo);
    const updatedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    updatedTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setNewTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <header className="header">
      <Title />
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </header>
  );
}

export default Header;
