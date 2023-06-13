import PropTypes from "prop-types";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductByCategory(categoryId).then((response) => {
        setProducts(response);
        
      });
    } else {
      getProducts().then((response) => {
        setProducts(response);
      });
    }
  }, [categoryId]);

  console.log(categoryId)
  return (
    <div className="greetings mt-5">
      <h1>{greeting}</h1>
   
      <div>
        <ItemList products={products} />
      </div>

    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
