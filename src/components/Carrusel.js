import React from 'react';

function ItemListContainer({ productos }) {
  return (
    <div className="container">
      <h2>Bienvenido al inicio</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Stock: {producto.stock}</p>
                <p className="card-text">Promoción: S/{producto.precioConDescuento}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
