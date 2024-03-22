import React, { useState } from 'react';

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

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
    onAdd(count);
  };

  return (

    <div className="item-count">
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" onClick={handleDecrement}>-</button>
        <input type="text" className="form-control text-center" value={count} readOnly />
        <button className="btn btn-outline-secondary" type="button" onClick={handleIncrement}>+</button>
        <button className="btn btn-primary btn-block" onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
      
    </div>  

  );
}

export default ItemCount;
