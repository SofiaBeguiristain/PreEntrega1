import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode }) => {
  return (
    <>
      <div
        className={
          darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"
        }
      >
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dyj4xvjna/image/upload/v1728600578/logoaltapinta_mzlarw.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Todas</Link>
          <Link to="/category/premium">Sin alcohol</Link>
          <Link to="/category/clasicas">Clásicas</Link>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
