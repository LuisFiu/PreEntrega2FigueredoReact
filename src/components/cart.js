import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router-dom';


function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN'
    }).format(amount);
  };

  const totalPrice = cart.reduce((total, item) => total + (item.cantidad * item.precioConDescuento), 0);

  return (
  <div class = "container">
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Productos en el Carrito</h5>
            {cart.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td>{item.cantidad}</td>
                      <td>{formatCurrency(item.precioConDescuento)}</td>
                      <td>{formatCurrency(item.cantidad * item.precioConDescuento)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Resumen de Compra</h5>
            <p>Total: {formatCurrency(totalPrice)}</p>
            <button onClick={clearCart} className="btn btn-danger mr-2">Limpiar Carrito</button>
            <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
          </div>
        </div>
      </div>
    </div>
  </div>   
  );
}

export default Cart;


