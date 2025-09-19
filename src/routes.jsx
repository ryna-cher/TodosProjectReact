import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import TodoDetails from "./pages/TodoDetails";
import FAQ from "./pages/FAQ";

const ROUTES_MAP = {
  "/": { index: true, element: <HomePage />, linkName: "Home" },
  "/todos": { element: <TodosPage />, linkName: "Todos" },
  "/todos/:id": { element: <TodoDetails />, linkName: "Todo", hidden: true },
  "/faq": { element: <FAQ />, linkName: "FAQ" },
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: Object.entries(ROUTES_MAP).map(([path, { index, element }]) => ({
      path,
      element,
      index,
    })),
  },
]);

export { ROUTES_MAP };
export default routes;
