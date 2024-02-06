import { useState, useEffect } from "react";
import Todo from "./Todo";
import Header from "../Header/Header";
import Footer from "../Footer";
function Main() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  const updateTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  return (
    <>
    <Header onAddTodo={updateTodos} />
    <section class="main">
      
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              label={todo}
              onDelete={() => handleDeleteTodo(index)}
            />
          );
        })}
      </ul>
    </section>
    <Footer todos={todos} />
    </>
  );
}

export default Main;
