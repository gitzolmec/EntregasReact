import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CartWidget from "../CartWidget/CartWidget";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navB d-flex navbar navbar-dark">
      <img
        onClick={() => navigate("/")}
        src="..\src\assets\img\logo-2019.png"
        className="logo mb-2"
      ></img>
      <div className="mt-5">
        <Link to={"../category/juegosSwitch"} className="btn btn-primary m-2">
          Juegos Nintendo Switch
        </Link>
        <Link to={"../category/juegosPS5"} className="btn btn-primary m-2">
          Juegos Playstation 5
        </Link>
      </div>

      <div className="">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
