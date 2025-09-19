import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/TodosSlice";
import Section from "../components/Section";

export default function TodosPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <Section />
    </div>
  );
}