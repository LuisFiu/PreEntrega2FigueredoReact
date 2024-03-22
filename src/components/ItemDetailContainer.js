import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const productos = [
    { 
      id: 1, 
      nombre: "Producto 1", 
      stock: 20, 
      precioOriginal: 12.99, 
      precioConDescuento: 9.99,
      imagen: "https://www.sabormarino.com/assets/images/default.png"
    },
    { 
      id: 2, 
      nombre: "Producto 2", 
      stock: 15, 
      precioOriginal: 22.99, 
      precioConDescuento: 18.99,
      imagen: "https://www.sabormarino.com/assets/images/default.png"
    },
    { 
      id: 3, 
      nombre: "Producto 3", 
      stock: 30, 
      precioOriginal: 6.99, 
      precioConDescuento: 4.99,
      imagen: "https://www.sabormarino.com/assets/images/default.png"
    },
    { 
      id: 4, 
      nombre: "Producto 4", 
      stock: 25, 
      precioOriginal: 16.99, 
      precioConDescuento: 12.99,
      imagen: "https://www.sabormarino.com/assets/images/default.png"
    },
    { 
      id: 5, 
      nombre: "Producto 5", 
      stock: 10, 
      precioOriginal: 20.99, 
      precioConDescuento: 16.99,
      imagen: "https://www.sabormarino.com/assets/images/default.png"
    }
  ];

  const handleAddToCart = (quantity) => {
    console.log(`Agregando ${quantity} unidades del producto al carrito`);
  };

  useEffect(() => {
    const foundProduct = productos.find(item => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, productos]);

  return (
    <div className="container">
      <h2 className="text-center">Detalle del Producto</h2>
      {product ? (
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <img className="card-img-top" src={product.imagen} alt={product.nombre} />
          <div className="card-body">
            <h5 className="card-title">Nombre: {product.nombre}</h5>
            <p className="card-text">ID del Producto: {product.id}</p>
            <p className="card-text">Stock: {product.stock}</p>
            <p className="card-text">Precio Original: {product.precioOriginal}</p>
            <p className="card-text">Precio con Descuento: {product.precioConDescuento}</p>
            <ItemCount initial={1} stock={product.stock} onAdd={handleAddToCart} />
          </div>
        </div>
      ) : (
        <p className="text-center">Cargando...</p>
      )}
    </div>
  );
}

export default ProductDetail;
