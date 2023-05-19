import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const navigate = useNavigate();

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
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Añadido al carrito",
            showConfirmButton: false,
            timer: 800,
        });
    };

    const quitarDelCarrito = (id) => {
        const arrayFiltrado = cart.filter((element) => element.id !== id);
        setCart(arrayFiltrado);
        arrayFiltrado.length == 0 && navigate("/");
    };

    const vaciarCarrito = () => {
        Swal.fire({
            title: "Quieres anular Carrito?",
            showDenyButton: true,
            confirmButtonText: "Si, vaciar",
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                navigate("/");
            }
        });
    };

    const vaciarPostForm = () => {
        setCart([]);
    };

    const existe = (objeto) => {
        const miralo = cart.some((el) => el.id === objeto);
        return miralo;
    };

    const conseguirQuantityById = (id) => {
        const buscado = cart.find((element) => element.id === id);
        return buscado ? buscado.Quantity : 1;
    };

    const contarTotalCarrito = () => {
        let total = cart.reduce((acc, ele) => {
            return acc + ele.price * ele.Quantity;
        }, 0);

        return total;
    };
    const contarTotalUnidades = () => {
        let total = cart.reduce((acc, ele) => {
            return acc + ele.Quantity;
        }, 0);
        return total;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                agregarCarrito,
                vaciarCarrito,
                quitarDelCarrito,
                conseguirQuantityById,
                contarTotalCarrito,
                contarTotalUnidades,
                vaciarPostForm,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
