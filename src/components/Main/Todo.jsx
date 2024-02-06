import { useState } from "react";

function Todo({ label, onDelete }) {
  const [toggle, setToggle] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    onDelete();
    setIsDeleted(true);
  };

  return  (
    <li className={toggle ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => setToggle(!toggle)}
          checked={toggle}
        />
        <label>{label}</label>
        <button onClick={handleDelete} className="destroy"></button>
      </div>
    </li>
  );
}

export default Todo;
