import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount((valor) => valor + 1);
  };
  const disminuir = () => {
    setCount((valor) => (valor > 0 ? valor - 1 : valor));
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn btn-dark m-2" onClick={aumentar}>
        +
      </button>
      <button className="btn btn-dark m-2" onClick={disminuir}>
        -
      </button>
    </div>
  );
};

export default ItemCount;
