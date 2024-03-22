import React from 'react';
import Carrusel from './Carrusel';

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

function Home() {
  return (
    <div className="Home">
      <Carrusel productos={productos} />
    </div>
  );
}

export default Home;
