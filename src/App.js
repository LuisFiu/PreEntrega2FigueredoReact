import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';

const productos = [
  { id: 1, nombre: "Producto 1", precio: 10.99 },
  { id: 2, nombre: "Producto 2", precio: 19.99 },
  { id: 3, nombre: "Producto 3", precio: 5.99 },
  { id: 4, nombre: "Producto 4", precio: 14.99 },
  { id: 5, nombre: "Producto 5", precio: 18.99 }
];

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer productos={productos} />   
    </div>
    
  );
}

export default App;
