import { useDispatch } from "react-redux";
import { setTodoToEdit, deleteTodoAsync, toggleTodoAsync } from "../store/TodosSlice";
import { Link } from "react-router-dom";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodoAsync({ id: todo.id, completed: !todo.completed }))}
        />
        {todo.completed ? <s>{todo.title}</s> : todo.title}
      </div>

      <div className="d-flex align-items-center gap-2">
        <Link to={`/todos/${todo.id}`} className="btn btn-sm btn-info">
          Details
        </Link>

        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => dispatch(setTodoToEdit(todo))}
        >
          Edit
        </button>

        <button
          onClick={() => dispatch(deleteTodoAsync(todo.id))}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

