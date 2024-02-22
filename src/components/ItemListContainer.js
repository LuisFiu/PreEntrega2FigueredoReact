import React from 'react';

function ItemListContainer(props) {
  const { productos } = props;

  return (
    <div className='container'>
      <h2>Lista de Productos</h2>
      <div className="row">
        {productos.map(producto => (
          <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <a href="#" className="btn btn-primary">Agregar al carrito</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
