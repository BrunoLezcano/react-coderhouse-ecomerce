import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/cartContext";

const CartConteiner = () => {
    const { cart, vaciarCarrito, quitarDelCarrito, contarTotalCarrito } = useContext(CartContext);
    const total = contarTotalCarrito();
    const productosPorId = cart.length;

    return (
        <div>
            <Cart
                cart={cart}
                total={total}
                vaciarCarrito={vaciarCarrito}
                quitarDelCarrito={quitarDelCarrito}
                productosPorId={productosPorId}
            />
        </div>
    );
};

export default CartConteiner;
