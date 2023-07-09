import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import ItemDetail from "../itemDetails/itemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const productRef = doc(db, "Products", itemId);

    getDoc(productRef).then((querySnapshot) => {
      const fields = querySnapshot.data();
      const productAdapted = { id: querySnapshot.id, ...fields };

      setProduct(productAdapted);
    });
  }, [itemId]);

  return <>{product && <ItemDetail {...product} />}</>;
};

export default ItemDetailContainer;
