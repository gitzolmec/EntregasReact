import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../service/firebase/firebaseConfig";
import Swal from "sweetalert2";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import PurchaseForm from "../PurchaseForm/PurchaseForm";
import "./Checkout.css";

const Checkout = () => {
  const { cart, cantidadTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [buyerData, setBuyerData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setBuyerData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const createOrder = async () => {
    if (!buyerData.name || !buyerData.phone || !buyerData.email) {
      console.log("Ingresa los datos del comprador");
      return;
    }
    setLoading(true);

    const objOrder = {
      buyer: buyerData,
      items: cart,
      total: cantidadTotal,
    };

    try {
      const ids = cart.map((prod) => prod.id);
      const productsRef = query(
        collection(db, "Products"),
        where(documentId(), "in", ids)
      );
      const { docs } = await getDocs(productsRef);

      const batch = writeBatch(db);
      const outOfStock = [];

      docs.forEach((doc) => {
        const fieldsDoc = doc.data();
        const stockDb = fieldsDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderRef = collection(db, "orders");

        const { id } = await addDoc(orderRef, objOrder);
        Swal.fire({
          title: "Orden Ingresada",
          text: `Su compra ha sido realizada con éxito`,
          html: "Numero de la Orden: " + id,
          icon: "success",
          timer: 3000,
        });
        setTimeout(() => {
          location.href = "/";
        }, 3000);

        clearCart();
      } else {
        Swal.fire({
          title: "Orden Rechazada",
          text: `Productos sin Stock`,
          icon: "error",
          timer: 3000,
        });
        setTimeout(() => {
          location.href = "/";
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Ingresando Orden...</h1>;
  }
  return (
    <>
      <h1>Checkout</h1>
      <div className="form ">
        <PurchaseForm handleInputChange={handleInputChange} />
        <button onClick={createOrder}>Generar orden de compra</button>
      </div>
    </>
  );
};

export default Checkout;
