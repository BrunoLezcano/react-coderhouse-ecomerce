import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarCarrito = (producto) => {
        const notificar = existe(producto.id);

        if (notificar) {
            const newArray = cart.map((element) => {
                if (element.id === producto.id) {
                    return {
                        ...element,
                        Quantity: element.Quantity + producto.Quantity,
                    };
                } else {
                    return element;
                }
            });

            setCart(newArray);
        } else {
            setCart([...cart, producto]);
        }
    };

    const quitarDelCarrito = (id) => {
        const arrayFiltrado = cart.filter((element) => element.id !== id);
        setCart(arrayFiltrado);
    };

    const vaciarCarrito = () => setCart([]);

    const existe = (objeto) => {
        const miralo = cart.some((el) => el.id === objeto);
        return miralo;
    };

    return (
        <CartContext.Provider
            value={{ cart, agregarCarrito, vaciarCarrito, quitarDelCarrito }}
        >
            {children}
        </CartContext.Provider>
    );
};
