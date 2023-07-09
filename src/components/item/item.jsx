import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ id, img, nombre, categoria, precio }) => {
  return (
    <div key={id} className="col-md-2 mb-4">
      <div className="card">
        <img
          src={"../" + img}
          className="card-img-top"
          alt="imagen del juego"
        />

        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">categoria: {categoria}</p>
          <h5 className="card-text">precio: {precio}</h5>
          <Link className="btn btn-primary" to={`/item/${id}`}>
            detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

export default Item;
