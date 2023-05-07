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
                        Quantity: producto.Quantity,
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

    const conseguirQuantityById = (id) => {
        const buscado = cart.find((element) => element.id === id);
        return buscado ? buscado.Quantity : 1;
    };

    return (
        <CartContext.Provider value={{ cart, agregarCarrito, vaciarCarrito, quitarDelCarrito, conseguirQuantityById }}>
            {children}
        </CartContext.Provider>
    );
};
