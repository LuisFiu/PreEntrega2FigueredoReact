import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productosCollection = collection(db, 'productos');
      const data = await getDocs(productosCollection);
      setProductos(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <h2>Lista de Productos</h2>
      <div className="row">
        {productos.map(producto => (
          <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <div className="mb-3">
                  <p className="mb-1"><strong>Stock:</strong> {producto.stock}</p>
                  <p className="mb-1"><strong>Precio:</strong> S/{producto.precioOriginal}</p>
                  <p className="mb-0"><strong>Promoción:</strong> S/{producto.precioConDescuento}</p>
                </div>
                <Link to={`/producto/${producto.id}`} className="btn btn-primary mt-2">Ver Detalle</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
