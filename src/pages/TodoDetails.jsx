import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { todosSelector } from "../store/TodosSlice";

export default function TodoDetails() {
  const { id } = useParams();
  const todos = useSelector(todosSelector);

  const todo = todos.find((t) => t.id.toString() === id);

  if (!todo) return <p className="text-center mt-5">Don`t exist</p>;

  return (
    <div className="container py-5">
      <Link to="/todos" className="btn btn-outline-secondary mb-3">
        ← Back to list
      </Link>

      <h2>{todo.title}</h2>
      <p>{todo.completed ? "Completed" : "In progress"}</p>
      <p>
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
        sapien eget justo viverra dapibus.
      </p>
    </div>
  );
}
