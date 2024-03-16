import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a className="navbar-brand" href="#">E-commerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Acerca</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contacto</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
