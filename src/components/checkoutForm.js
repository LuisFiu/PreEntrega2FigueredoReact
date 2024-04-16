import React, { useState } from 'react';

function CheckoutForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = generateOrderId();
    const total = localStorage.getItem('cartTotal');
    onSubmit({ name, phone, email, orderId, total });
  };

  const generateOrderId = () => {
    return 'ORDER-' + Math.floor(Math.random() * 1000000);
  };

  return (
    <div>
      <div className="text-center card w-50">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Número de Teléfono</label>
              <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
