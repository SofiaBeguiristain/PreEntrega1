import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <img
          src="https://res.cloudinary.com/dyj4xvjna/image/upload/v1728600578/logoaltapinta_mzlarw.png"
          alt=""
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <ul style={{ display: "flex", gap: "10px" }}>
          <li>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
