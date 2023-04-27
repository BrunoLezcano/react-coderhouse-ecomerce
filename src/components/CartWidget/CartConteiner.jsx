import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/cartContext";

const CartConteiner = () => {
    const { cart, vaciarCarrito, quitarDelCarrito } = useContext(CartContext);

    return (
        <div>
            <Cart
                cart={cart}
                vaciarCarrito={vaciarCarrito}
                quitarDelCarrito={quitarDelCarrito}
            />
        </div>
    );
};

export default CartConteiner;
