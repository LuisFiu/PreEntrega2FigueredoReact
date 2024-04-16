import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      onAdd(count);
      setAddedToCart(true);
    }
  };
  

  return (
    <div className="item-count">
      <div className="input-group mb-3">
        {addedToCart ? (
          <Link to="/cart" className="btn btn-success">Finalizar Compra</Link>
        ) : (
          <>
            <button className="btn btn-outline-secondary" type="button" onClick={handleDecrement}>-</button>
            <input type="text" className="form-control text-center" value={count} readOnly />
            <button className="btn btn-outline-secondary" type="button" onClick={handleIncrement}>+</button>
            <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al carrito</button>
          </>
        )}
      </div>
    </div>  
  );
}

export default ItemCount;

