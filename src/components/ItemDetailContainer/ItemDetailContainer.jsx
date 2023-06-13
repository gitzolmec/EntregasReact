import { getProductById } from "../../asyncMock";
import { useAsync } from "../../hooks/useAsync";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css";
const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const { data: product } = useAsync(
    () => getProductById(Number(itemId)),
    [itemId]
  );

  console.log(product?.img);
  return (
    <div className="card col-md-8 mx-auto bgDetalle">
      <div className="col-md-8 mb-4 mx-auto">
        <div className="card col-md-4 mx-auto mt-4">
          <img src={"../" + product?.img} />
        </div>
        <div className="card-body">
          <h1 className="card-title">{product?.nombre}</h1>
          <p className="card-text">{product?.Descripcion}</p>
          <h5 className="card-text">PRECIO: {product?.precio}</h5>
          <ItemCount />
        </div>
      </div>
    </div>
  );
};
export default ItemDetailContainer;
