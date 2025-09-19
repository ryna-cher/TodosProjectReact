import { Link, useLocation } from "react-router";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((el) => el !== "");

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={to}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
            >
              {isLast ? value : <Link to={to}>{value}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
