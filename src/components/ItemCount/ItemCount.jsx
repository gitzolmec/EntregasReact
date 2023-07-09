import { useState } from "react";
import PropTypes from "prop-types";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    setCount((valor) => (valor < stock ? valor + 1 : valor));
  };
  const disminuir = () => {
    setCount((valor) => (valor > 1 ? valor - 1 : valor));
  };
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button className="btn btn-dark m-2" onClick={aumentar}>
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            onAdd(count);
          }}
        >
          Agregar
        </button>
        <button className="btn btn-dark m-2" onClick={disminuir}>
          -
        </button>
      </div>
      <div></div>
    </>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};
export default ItemCount;
