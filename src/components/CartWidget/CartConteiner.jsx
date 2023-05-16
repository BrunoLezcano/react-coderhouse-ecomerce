import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

const CartConteiner = () => {
    const { cart, vaciarCarrito, quitarDelCarrito, contarTotalCarrito } = useContext(CartContext);
    const total = contarTotalCarrito();

    const navigate = useNavigate();

    return (
        <div>
            <Cart
                cart={cart}
                total={total}
                vaciarCarrito={vaciarCarrito}
                quitarDelCarrito={quitarDelCarrito}
                navigate={navigate}
            />
        </div>
    );
};

export default CartConteiner;
