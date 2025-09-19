import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container py-5">
      <h1>TODO List Project</h1>
      <p className="lead">
        This is a task managment application: you can add, edit, delete and mark tasks as completed.
      </p>

      <div className="mt-4">
        <Link to="/todos" className="btn btn-primary me-2">
          Go to Todos
        </Link>
        <Link to="/faq" className="btn btn-secondary">
          FAQ
        </Link>
      </div>
    </div>
  );
}