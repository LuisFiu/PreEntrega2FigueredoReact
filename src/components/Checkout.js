import React, { useState } from 'react';
import CheckoutForm from './checkoutForm';

function Checkout() {
  const [orderID, setOrderID] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (formData) => {

    const newOrderID = generateOrderID();

    setTimeout(() => {
      setOrderID(newOrderID);
      setName(formData.name);
      setPhone(formData.phone);
      setEmail(formData.email);
    }, 1000);
  };

  const generateOrderID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <CheckoutForm onSubmit={handleSubmit} />
        </div>
        <div className="col-md-6">
          {orderID ? (
            <div>
              <h3>Orden Generada</h3>
              <p>ID de Orden: {orderID}</p>
              <p>Nombre: {name}</p>
              <p>Teléfono: {phone}</p>
              <p>Correo Electrónico: {email}</p>
            </div>
          ) : (
            <p>Completa el formulario para generar tu orden</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
