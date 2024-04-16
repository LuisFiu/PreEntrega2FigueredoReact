import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from './cartContext';

function CartWidget() {
    const { cart } = useContext(CartContext); 

    const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

    return (
        <Link to="/cart" className="text-decoration-none d-flex align-items-center"> {/* Link para navegar al carrito */}
            <div className="mr-2">{totalItems}</div> {/* Muestra la cantidad total de productos en el carrito */}
            <span className="fa-stack fa-lg">
                <i className="fas fa-shopping-cart fa-stack-1x"></i>
            </span>
        </Link>
    );
}

export default CartWidget;
