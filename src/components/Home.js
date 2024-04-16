import React from 'react';
import Carrusel from './Carrusel';
import productosJSON from './productos.json';

const productos = productosJSON;

function Home() {
  return (
    <div className="Home">
      <Carrusel productos={productos} />
    </div>
  );
}

export default Home;
