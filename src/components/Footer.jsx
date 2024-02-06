import { useState, useEffect } from "react";

function Footer({ todos }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Utilisez querySelector pour sélectionner les éléments qui n'ont pas la classe "completed"
    const activeTodos = document.querySelectorAll(".todo-list li:not(.completed)");
    
    // Mettez à jour le compteur en fonction du nombre d'éléments sans la classe "completed"
    setCount(activeTodos.length);
  }, [todos]);
  

  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>{count}</strong> item(s) left
      </span>
      <ul class="filters">
        <li>
          <a href="#/" class="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/active" class="active">
            Active
          </a>
        </li>
        <li>
          <a href="#/completed" class="completed">
            Completed
          </a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
