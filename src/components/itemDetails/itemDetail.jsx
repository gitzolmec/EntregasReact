import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import PropTypes from "prop-types";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, img, nombre, stock, precio, descripcion }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);

    const objProduct = {
      id,
      img,
      nombre,
      quantity,
      precio,
    };
    addItem(objProduct);
  };

  return (
    <div className="card col-md-8 mx-auto bgDetalle">
      <div className="col-md-8 mb-4 mx-auto">
        <div className="card col-md-4 mx-auto mt-4">
          <img src={"../" + img} />
        </div>
        <div className="card-body">
          <h1 className="card-title text-center">{nombre}</h1>
          <p className="card-text">{descripcion}</p>
          <h5 className="card-text">STOCK: {stock}</h5>
          <h5 className="card-text">PRECIO: ${precio}</h5>
          <div className="text-center description ">
            {quantity == 0 ? (
              stock > 0 ? (
                <ItemCount stock={stock} onAdd={handleOnAdd} />
              ) : (
                <p>PRODUCTO SIN STOCK</p>
              )
            ) : (
              <>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
                <Link to="/cart" className="btn btn-success">
                  ir a pagar
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  precio: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default ItemDetail;
