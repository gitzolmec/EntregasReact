import { useState } from "react";
import PropTypes from "prop-types";
import "./PurchaseForm.css";

const PurchaseForm = ({ handleInputChange }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    handleInputChange("name", value);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
    handleInputChange("phone", value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    handleInputChange("email", value);
  };

  return (
    <div className="purchase-form-container">
      <form>
        <div className="form-group">
          <label className="mt-4" htmlFor="name">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-4" htmlFor="phone">
            Teléfono:
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Ingresa tu teléfono"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="mt-4" htmlFor="email">
            Correo electrónico:
          </label>
          <input
            type="email"
            className="form-control mb-4"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

PurchaseForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default PurchaseForm;
