import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <>
      <Header />
      <main className="container py-3">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;



