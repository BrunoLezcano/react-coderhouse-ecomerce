import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../../productosMock";

export function Items() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const saludar = new Promise((resolve, reject) => {
            resolve(productos);
        });

        saludar
            .then((resultado) => {
                setItems(resultado);
            })
            .catch((err) => {
                console.log("a esta parte ya habria un rechazo");
            });
    }, []);

    return (
        <div>
            <ItemList listadoDeItems={items} />
        </div>
    );
}
