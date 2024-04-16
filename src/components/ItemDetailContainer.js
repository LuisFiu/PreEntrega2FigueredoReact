import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './cartContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Obtener la función addToCart del contexto del carrito

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productDoc = doc(db, 'productos', id);
      const docSnap = await getDoc(productDoc);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    };
  
    fetchData();
  }, [id]);
  

  const handleAddToCart = (quantity) => {
    if (product) {
      addToCart({ ...product, cantidad: quantity }); // Pasar un objeto con la cantidad y el producto al carrito
    }
  };

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
