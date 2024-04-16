import React from 'react';
import ItemListContainer from './ItemListContainer';
import productosJSON from './productos.json';


const productos = productosJSON;


function Products() {
  return (
    <div className="Home">
      <ItemListContainer productos={productos} />
    </div>
  );
}

export default Products;
