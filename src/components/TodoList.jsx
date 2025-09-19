import { useSelector } from "react-redux";
import { todosSelector } from "../store/TodosSlice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector(todosSelector);

  return (
    <ul className="list-group mb-0">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
