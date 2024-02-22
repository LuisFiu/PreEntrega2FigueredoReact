
function CartWidget() {
    return (
        <span className="fa-stack fa-lg">
            <i className="fas fa-shopping-cart fa-stack-1x"></i>
            <span className="fa-stack-1x cart-counter text-white">1</span>
        </span>
    );
}
export default CartWidget;
