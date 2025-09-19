import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoToEditSelector, clearTodoToEdit, updateTodoAsync } from "../store/TodosSlice";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function EditTodoModal() {
  const dispatch = useDispatch();
  const todoToEdit = useSelector(todoToEditSelector);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (todoToEdit) setTitle(todoToEdit.title);
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    dispatch(updateTodoAsync({ ...todoToEdit, title }));
  };

  return (
    <Modal show={!!todoToEdit} onHide={() => dispatch(clearTodoToEdit())}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="d-grid gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
