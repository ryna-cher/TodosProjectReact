import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../store/TodosSlice";
import TodoList from "./TodoList";
import EditTodoModal from "./EditTodoModal";

export default function Section() {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;
    dispatch(addTodoAsync({ id: crypto.randomUUID(), title: newTitle, completed: false }));
    setNewTitle("");
  };

  return (
    <section className="bg-primary bg-gradient">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h1 className="mb-3">Awesome Todo List</h1>

                <form
                  onSubmit={handleSubmit}
                  className="d-flex justify-content-center align-items-end mb-4"
                >
                  <div className="form-outline flex-fill">
                    <label className="form-label" htmlFor="form3">
                      What do you need to do today?
                    </label>
                    <input
                      type="text"
                      id="form3"
                      className="form-control form-control-lg"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg ms-2">
                    Add
                  </button>
                </form>

                <TodoList />

                <EditTodoModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





